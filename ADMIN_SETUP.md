# CMS admin — jednorazové nastavenie

Kód je hotový (Postgres databáza pre články, prihlásenie cez Google, nahrávanie fotiek cez Vercel Blob). Aby to fungovalo na produkcii, treba raz spraviť tieto kroky vo Vercel a Google Cloud dashboardoch — sú to veci, ktoré viem pripraviť len ja v kóde, ale samotné vytvorenie cloud služieb musíš spraviť ty (nemám k nim prístup).

## 1. Databáza — Vercel Postgres (Neon)

1. Choď na [vercel.com](https://vercel.com) → tvoj projekt `david-habanek-blog` → tab **Storage**.
2. **Create Database → Postgres (Neon)** → názov napr. `david-habanek-blog-db` → **Connect** k projektu (Production + Preview + Development).
3. Vercel automaticky pridá premenné `POSTGRES_URL` (a pár ďalších `POSTGRES_*`) do nastavení projektu — nič ďalšie tu netreba robiť.

## 2. Fotky — Vercel Blob

1. V tom istom **Storage** tabe: **Create Database → Blob** → **Connect** k projektu.
2. Vercel automaticky pridá `BLOB_READ_WRITE_TOKEN`.

## 3. Prihlásenie do CMS — Google OAuth

1. Choď na [Google Cloud Console](https://console.cloud.google.com/) → vytvor nový projekt (alebo použi existujúci).
2. **APIs & Services → OAuth consent screen** — typ "External", vyplň názov appky, tvoj mail ako support email. Ak appka zostane v režime "Testing", pridaj `habanekdavid@gmail.com` do zoznamu **Test users** (inak sa neprihlásiš).
3. **APIs & Services → Credentials → Create Credentials → OAuth client ID** → typ **Web application**.
4. Pod **Authorized redirect URIs** pridaj presne:
   - `https://david-habanek-blog.vercel.app/api/auth/callback/google`
   - (voliteľne pre lokálny vývoj) `http://localhost:3000/api/auth/callback/google`
5. Ulož a skopíruj **Client ID** a **Client secret**.

## 4. Environment premenné vo Verceli

V projekte na Verceli → **Settings → Environment Variables** pridaj (pre Production aj Preview):

| Názov | Hodnota |
|---|---|
| `AUTH_GOOGLE_ID` | Client ID z kroku 3 |
| `AUTH_GOOGLE_SECRET` | Client secret z kroku 3 |
| `AUTH_SECRET` | náhodný reťazec — vygeneruješ príkazom `npx auth secret` alebo `openssl rand -base64 33` |

(`POSTGRES_URL` a `BLOB_READ_WRITE_TOKEN` už tam sú z krokov 1–2. `AUTH_TRUST_HOST` netreba nastavovať — na Verceli sa deteguje automaticky.)

Po pridaní premenných treba spraviť nový deploy (stačí prázdny commit alebo tlačidlo **Redeploy** vo Verceli), aby sa premenné načítali.

## 5. Naplnenie databázy pôvodnými článkami (raz)

Toto stiahne premenné z Vercelu k tebe na počítač a raz vytvorí tabuľku + nahrá tvojich 6 pôvodných článkov:

```bash
npm install -g vercel      # ak ešte nemáš CLI
vercel login
vercel link                # prepojí tento priečinok s projektom na Verceli
vercel env pull .env.local # stiahne POSTGRES_URL, BLOB_READ_WRITE_TOKEN, atď.

npm run db:migrate         # vytvorí tabuľku articles
npm run db:seed            # nahrá pôvodných 6 článkov (len ak je tabuľka prázdna)
```

## 6. Hotovo

Potom choď na `https://david-habanek-blog.vercel.app/admin` → **Prihlásiť sa cez Google** → prihlás sa účtom `habanekdavid@gmail.com`. Uvidíš zoznam článkov, môžeš pridávať nové, upravovať aj mazať, aj nahrávať k nim fotky. Prihlásenie funguje **iba** pre tento jeden e‑mail — nikto iný sa dnu nedostane.
