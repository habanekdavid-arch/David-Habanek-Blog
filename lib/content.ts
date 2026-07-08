export type Lang = "sk" | "en";

export interface LocalizedString {
  sk: string;
  en: string;
}

export interface Article {
  slug: string;
  rating: number;
  cat: LocalizedString;
  img: string;
  bg: string;
  title: LocalizedString;
  excerpt: LocalizedString;
  meta: LocalizedString;
  place: boolean;
  city?: string;
  address?: string;
  hours?: LocalizedString;
  price?: string;
  body: { sk: string[]; en: string[] };
}

export const stripe = (a: string, b: string) =>
  `repeating-linear-gradient(135deg,${a},${a} 10px,${b},${b} 20px)`;

export interface Dict {
  nav: { blog: string; topics: string; about: string; collab: string; cta: string };
  eyebrow: string;
  h1a: string;
  h1em: string;
  h1b: string;
  heroText: string;
  ctaRead: string;
  ctaCollab: string;
  stat1: string;
  stat2: string;
  stat3: string;
  panelKicker: string;
  panelSub: string;
  fcatA: string;
  ftitA: string;
  fcatB: string;
  ftitB: string;
  fcatC: string;
  ftitC: string;
  latestTitle: string;
  latestSub: string;
  viewAll: string;
  read: string;
  aboutKicker: string;
  aboutTitle: string;
  aboutP1: string;
  aboutP2: string;
  roles: string[];
  collabKicker: string;
  collabTitle: string;
  collabSub: string;
  ctTitle: string;
  ctSub: string;
  ctName: string;
  ctEmail: string;
  ctMsg: string;
  ctBtn: string;
  backToBlog: string;
  infoTitle: string;
  locationTitle: string;
  openMaps: string;
  mapPlaceholder: string;
  collabCta: string;
  rights: string;
  categoryLabel: string;
  readTimeLabel: string;
  ratingLabel: string;
  addressLabel: string;
  hoursLabel: string;
  priceLabel: string;
}

export const DICT: Record<Lang, Dict> = {
  sk: {
    nav: { blog: "Blog", topics: "Témy", about: "O mne", collab: "Spolupráca", cta: "Spolupracujme" },
    eyebrow: "Blog · jedlo · dizajn · kód",
    h1a: "Navrhujem, programujem a",
    h1em: "píšem",
    h1b: "o tom, čo ma baví.",
    heroText:
      "Som David Habánek — 22-ročný dizajnér a programátor zo Slovenska. Medzi projektmi objavujem reštaurácie, kaviarne a recepty a píšem o všetkom, čo ma cestou nadchne.",
    ctaRead: "Čítať blog",
    ctaCollab: "Spolupracujme",
    stat1: "recenzií",
    stat2: "tém",
    stat3: "rokov",
    panelKicker: "Blog & recenzie",
    panelSub: "Úprimné recenzie podnikov, recepty a postrehy z ciest.",
    fcatA: "Reštaurácie",
    ftitA: "Najlepší ramen v meste",
    fcatB: "Kaviarne",
    ftitB: "Špeciálky, ktoré stoja za to",
    fcatC: "Dizajn",
    ftitC: "Redesign menu, ktoré ľudia naozaj čítajú",
    latestTitle: "Najnovšie články",
    latestSub: "Recenzie, recepty a postrehy z ciest.",
    viewAll: "Všetky články",
    read: "Čítať",
    aboutKicker: "O mne",
    aboutTitle: "Skúšam veľa vecí naraz — a píšem o tom.",
    aboutP1:
      "Navrhujem rozhrania, programujem a tlačím na 3D tlačiarni. Najradšej však objavujem nové podniky a kuchyne, ktoré sa oplatí zažiť.",
    aboutP2:
      "Tento blog je miesto, kde sa to všetko spája — chuť do jedla, cesty a radosť z dobrého dizajnu.",
    roles: ["Dizajnér", "Programátor", "3D tlačiar", "Cestovateľ", "Foodie"],
    collabKicker: "Spolupráca & monetizácia",
    collabTitle: "Máš podnik alebo značku? Spojme sa.",
    collabSub:
      "Pomáham reštauráciám, kaviarňam a značkám dostať sa k publiku, ktoré naozaj rieši jedlo a zážitky. Tu je, ako spolu môžeme pracovať.",
    ctTitle: "Máš návrh na spoluprácu?",
    ctSub: "Napíš mi pár riadkov o podniku alebo projekte a ozvem sa ti späť. Najrýchlejšie ma chytíš na maile.",
    ctName: "Meno / podnik",
    ctEmail: "Email",
    ctMsg: "O čo ide?",
    ctBtn: "Odoslať správu",
    backToBlog: "Späť na blog",
    infoTitle: "Informácie",
    locationTitle: "Kde to nájdeš",
    openMaps: "Otvoriť v mapách",
    mapPlaceholder: "mapa · placeholder",
    collabCta: "Chcem spoluprácu",
    rights: "Všetky práva vyhradené",
    categoryLabel: "Kategória",
    readTimeLabel: "Dĺžka čítania",
    ratingLabel: "Hodnotenie",
    addressLabel: "Adresa",
    hoursLabel: "Otváracie hodiny",
    priceLabel: "Cenová úroveň",
  },
  en: {
    nav: { blog: "Blog", topics: "Topics", about: "About", collab: "Collaborate", cta: "Let's work together" },
    eyebrow: "Blog · food · design · code",
    h1a: "I design, code and",
    h1em: "write",
    h1b: "about what I love.",
    heroText:
      "I'm David Habánek — a 22-year-old designer and developer from Slovakia. Between projects I explore restaurants, cafés and recipes, and write about everything that excites me along the way.",
    ctaRead: "Read the blog",
    ctaCollab: "Let's collaborate",
    stat1: "reviews",
    stat2: "topics",
    stat3: "years old",
    panelKicker: "Blog & reviews",
    panelSub: "Honest reviews of places, recipes and notes from the road.",
    fcatA: "Restaurants",
    ftitA: "The best ramen in town",
    fcatB: "Cafés",
    ftitB: "Specialty spots worth the trip",
    fcatC: "Design",
    ftitC: "Redesigning a menu people actually read",
    latestTitle: "Latest articles",
    latestSub: "Reviews, recipes and notes from the road.",
    viewAll: "All articles",
    read: "Read",
    aboutKicker: "About me",
    aboutTitle: "I try a lot of things at once — and write about it.",
    aboutP1:
      "I design interfaces, write code and print on my 3D printer. But what I love most is discovering new places and kitchens worth experiencing.",
    aboutP2: "This blog is where it all comes together — a love of food, travel and the joy of good design.",
    roles: ["Designer", "Developer", "3D printing", "Traveler", "Foodie"],
    collabKicker: "Collaborate & monetize",
    collabTitle: "Got a place or a brand? Let's connect.",
    collabSub:
      "I help restaurants, cafés and brands reach an audience that genuinely cares about food and experiences. Here's how we can work together.",
    ctTitle: "Have a collaboration in mind?",
    ctSub: "Drop me a few lines about your place or project and I'll get back to you. Email is the fastest way to reach me.",
    ctName: "Name / business",
    ctEmail: "Email",
    ctMsg: "What's it about?",
    ctBtn: "Send message",
    backToBlog: "Back to blog",
    infoTitle: "Details",
    locationTitle: "Where to find it",
    openMaps: "Open in Maps",
    mapPlaceholder: "map · placeholder",
    collabCta: "Work with me",
    rights: "All rights reserved",
    categoryLabel: "Category",
    readTimeLabel: "Read time",
    ratingLabel: "Rating",
    addressLabel: "Address",
    hoursLabel: "Opening hours",
    priceLabel: "Price",
  },
};

export const CATEGORIES: LocalizedString[] = [
  { sk: "Reštaurácie", en: "Restaurants" },
  { sk: "Jedlá & recepty", en: "Food & recipes" },
  { sk: "Kaviarne", en: "Cafés" },
  { sk: "Cestovanie", en: "Travel" },
  { sk: "UI/UX", en: "UI/UX" },
  { sk: "Marketing", en: "Marketing" },
  { sk: "Technológie", en: "Tech" },
  { sk: "Svet", en: "World" },
];

export const HIGHLIGHT_CATEGORY: LocalizedString = { sk: "Dizajn & kód", en: "Design & code" };

export const ARTICLES: Article[] = [
  {
    slug: "ramen-bratislava",
    rating: 4.5,
    cat: { sk: "Reštaurácie", en: "Restaurants" },
    img: "foto · ramen",
    bg: stripe("#EDEAE4", "#F6F3ED"),
    title: { sk: "Najlepší ramen v Bratislave", en: "The best ramen in Bratislava" },
    excerpt: {
      sk: "Obišiel som šesť podnikov, aby som našiel misku, ku ktorej sa budem vracať. Tu je víťaz.",
      en: "I tried six spots to find the one bowl I keep coming back to. Here is the winner.",
    },
    meta: { sk: "8 min · Bratislava", en: "8 min · Bratislava" },
    place: true,
    city: "Bratislava",
    address: "Obchodná 12, 811 06 Bratislava",
    hours: { sk: "Po–Ne 11:00–22:00", en: "Mon–Sun 11:00–22:00" },
    price: "€€",
    body: {
      sk: [
        "Ramen je pre mňa test každej kuchyne — vývar musí mať hĺbku, rezance ťah a topping rovnováhu. Túto misku som ochutnal šesťkrát, kým som si bol istý.",
        "Tonkotsu vývar tu varia takmer 18 hodín a je to cítiť: hustý, hodvábny, bez zbytočnej mastnoty. Chashu bravčové sa rozpadá a marinované vajce má presne tekutý stred.",
        "Za tú cenu je to jedna z mála misiek v meste, ku ktorej sa naozaj vraciam. Rezervácie neberú, tak príď skôr — po 19:00 tu býva rad.",
      ],
      en: [
        "Ramen is how I test any kitchen — the broth needs depth, the noodles bite, the toppings balance. I ate this bowl six times before I was sure.",
        "They simmer the tonkotsu broth for nearly 18 hours and you can taste it: rich, silky, never greasy. The chashu falls apart and the marinated egg has a perfectly runny centre.",
        "For the price it is one of the few bowls in town I keep coming back to. No reservations, so come early — after 7pm there is a queue.",
      ],
    },
  },
  {
    slug: "cast-iron-pizza",
    rating: 4,
    cat: { sk: "Jedlá & recepty", en: "Food & recipes" },
    img: "foto · pizza",
    bg: stripe("#EFE7DE", "#F7F1E9"),
    title: { sk: "Domáca pizza na liatinovej panvici", en: "Homemade cast-iron pan pizza" },
    excerpt: {
      sk: "Bez pece, za 20 minút a s chrumkavým dnom. Postup, ktorý mi konečne vyšiel.",
      en: "No oven, 20 minutes, crispy bottom. The method that finally worked for me.",
    },
    meta: { sk: "6 min · recept", en: "6 min · recipe" },
    place: false,
    body: {
      sk: [
        "Roky som sa bál domácej pizze, lebo mi vždy vyšlo mäkké, bledé cesto. Riešením nebola pec, ale liatinová panvica rozpálená na maximum.",
        "Cesto necháš kysnúť aspoň 24 hodín v chladničke — získa chuť aj bublinky. Potom ho roztiahneš na panvicu, opečieš zospodu a dopečieš pod grilom v rúre.",
        "Výsledok je chrumkavé, prepečené dno a nadýchaný okraj za dvadsať minút. Nižšie nájdeš presný pomer surovín aj časovanie.",
      ],
      en: [
        "For years I feared homemade pizza because the base always came out soft and pale. The fix was not an oven but a cast-iron pan heated to the max.",
        "Let the dough rise at least 24 hours in the fridge — it gains flavour and bubbles. Then stretch it into the pan, crisp the bottom on the stove and finish under the grill.",
        "The result is a crunchy, charred base and a fluffy edge in twenty minutes. Below you will find the exact ratios and timing.",
      ],
    },
  },
  {
    slug: "specialty-cafes",
    rating: 5,
    cat: { sk: "Kaviarne", en: "Cafés" },
    img: "foto · kaviareň",
    bg: stripe("#E7EEE9", "#F2F6F3"),
    title: { sk: "Špecializované kaviarne, ktoré stoja za to", en: "Specialty cafés worth the trip" },
    excerpt: {
      sk: "Päť miest, kde to s kávou myslia vážne — a kde sa dobre pracuje aj sedí.",
      en: "Five places that take coffee seriously — and where you can actually work and sit.",
    },
    meta: { sk: "5 min · tipy", en: "5 min · guide" },
    place: true,
    city: "Bratislava",
    address: "Panská 27, 811 01 Bratislava",
    hours: { sk: "Po–Pia 8:00–19:00, So–Ne 9:00–18:00", en: "Mon–Fri 8:00–19:00, Sat–Sun 9:00–18:00" },
    price: "€€",
    body: {
      sk: [
        "Dobrá kaviareň nie je len o káve, ale o tom, či sa v nej chce zostať. Toto miesto zvláda oboje — filter aj priestor na prácu.",
        "Zrno rotujú každé dva týždne a baristi vedia, čo nalievajú. Skús ich filter na dennom výbere, chuťovo je to úplne inde než bežná espresso rutina.",
        "Wi-Fi je rýchle, zásuviek dosť a hudba tak akurát. Cez víkend býva plno, cez týždeň dopoludnia máš pokoj.",
      ],
      en: [
        "A good café is not only about the coffee but whether you want to stay. This place nails both — the filter and the room to work.",
        "They rotate beans every two weeks and the baristas know what they pour. Try their daily filter; it tastes worlds apart from the usual espresso routine.",
        "The Wi-Fi is fast, there are enough sockets and the music sits just right. Weekends get busy; weekday mornings are calm.",
      ],
    },
  },
  {
    slug: "lisbon-street-food",
    rating: 4.5,
    cat: { sk: "Cestovanie", en: "Travel" },
    img: "foto · Lisabon",
    bg: stripe("#EAE6EF", "#F3F0F7"),
    title: { sk: "Street food v Lisabone", en: "Street food in Lisbon" },
    excerpt: {
      sk: "Čo jesť, kde to nájsť a koľko to stojí. Sprievodca po chutiach mesta na siedmich kopcoch.",
      en: "What to eat, where to find it and what it costs. A taste guide to the city of seven hills.",
    },
    meta: { sk: "11 min · Lisabon", en: "11 min · Lisbon" },
    place: true,
    city: "Lisabon",
    address: "Time Out Market, Av. 24 de Julho 49, Lisboa",
    hours: { sk: "Denne 10:00–24:00", en: "Daily 10:00–24:00" },
    price: "€–€€",
    body: {
      sk: [
        "Lisabon sa je najlepšie po nohách a po častiach — malé porcie, veľa zastávok. Začni v Time Out Marte a odtiaľ sa prejedaj mestom.",
        "Nevynechaj bifanu (bravčový sendvič), čerstvé pastéis de nata a grilované sardinky zo stánku. Ceny sú stále príjemné, ak sa vyhneš turistickým triedam.",
        "Nachystaj si pohodlné topánky a chuť do kopcov. Najlepšie sústa som našiel v uličkách Alfamy, ďaleko od hlavného námestia.",
      ],
      en: [
        "Lisbon is best eaten on foot and in pieces — small portions, many stops. Start at the Time Out Market and eat your way across the city from there.",
        "Do not skip the bifana (pork sandwich), fresh pastéis de nata and grilled sardines from a stall. Prices stay friendly if you avoid the tourist avenues.",
        "Bring comfortable shoes and an appetite for hills. I found the best bites in the alleys of Alfama, far from the main square.",
      ],
    },
  },
  {
    slug: "booking-form-ux",
    rating: 4,
    cat: { sk: "UI/UX", en: "UI/UX" },
    img: "foto · UI",
    bg: stripe("#E6ECEF", "#F0F4F6"),
    title: { sk: "Ako navrhnúť rezervačný formulár, ktorý funguje", en: "Designing a booking form that converts" },
    excerpt: {
      sk: "Menej polí, jasné kroky, rýchla odozva. Princípy UX, ktoré používam na každom projekte.",
      en: "Fewer fields, clear steps, fast feedback. The UX principles I use on every project.",
    },
    meta: { sk: "9 min · UX", en: "9 min · UX" },
    place: false,
    body: {
      sk: [
        "Rezervačný formulár je miesto, kde podniky strácajú najviac zákazníkov. Každé pole navyše je ďalší dôvod odísť.",
        "Skrátil som formulár na tri jasné kroky, pridal okamžitú spätnú väzbu a predvyplnil, čo sa dá. Konverzia stúpla, lebo človek presne vie, čo ho čaká.",
        "V článku rozoberám konkrétne princípy — od poradia polí po mikrocopy tlačidiel — ktoré používam na každom projekte.",
      ],
      en: [
        "The booking form is where businesses lose the most customers. Every extra field is one more reason to leave.",
        "I cut the form to three clear steps, added instant feedback and pre-filled whatever I could. Conversion rose because people know exactly what to expect.",
        "In the article I break down the concrete principles — from field order to button microcopy — that I use on every project.",
      ],
    },
  },
  {
    slug: "how-i-built-this-site",
    rating: 5,
    cat: { sk: "Dizajn & kód", en: "Design & code" },
    img: "foto · web",
    bg: stripe("#E6ECEF", "#F0F4F6"),
    title: { sk: "Ako som postavil tento web", en: "How I built this website" },
    excerpt: {
      sk: "Minimalizmus, 3D hover efekty a systém na monetizáciu blogu. Rozoberám rozhodnutia za dizajnom.",
      en: "Minimalism, 3D hover effects and a system to monetize the blog. The decisions behind the design.",
    },
    meta: { sk: "7 min · za oponou", en: "7 min · behind the scenes" },
    place: false,
    body: {
      sk: [
        "Tento web má tri ciele: rýchlo sa načítať, dobre vyzerať a dať sa monetizovať bez otravných reklám.",
        "Postavil som ho ako jednu sústavu komponentov s dôrazom na typografiu a priestor. 3D hover efekty nie sú ozdoba — vedú oko k obsahu.",
        "Nižšie rozoberám rozhodnutia za dizajnom: prečo zelená, prečo serif na nadpisy a ako som poňal sekciu pre spolupráce.",
      ],
      en: [
        "This site has three goals: load fast, look good and be monetizable without annoying ads.",
        "I built it as a single system of components with a focus on typography and space. The 3D hover effects are not decoration — they lead the eye to the content.",
        "Below I unpack the decisions behind the design: why green, why a serif for headings and how I approached the collaboration section.",
      ],
    },
  },
];

// Design & code articles are prioritized to the front of the grid.
export const FEATURED_ORDER = [
  "how-i-built-this-site",
  "booking-form-ux",
  "ramen-bratislava",
  "cast-iron-pizza",
  "specialty-cafes",
  "lisbon-street-food",
];

export const FEATURED_ARTICLES: Article[] = FEATURED_ORDER.map(
  (slug) => ARTICLES.find((a) => a.slug === slug)!
);

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export interface CollabItem {
  no: string;
  title: LocalizedString;
  text: LocalizedString;
}

export const COLLAB: CollabItem[] = [
  {
    no: "01",
    title: { sk: "Sponzorované články", en: "Sponsored articles" },
    text: {
      sk: "Napíšem autentickú recenziu alebo príbeh o tvojom podniku pre publikum, ktoré rieši jedlo a zážitky.",
      en: "I write an authentic review or story about your place for an audience that cares about food and experiences.",
    },
  },
  {
    no: "02",
    title: { sk: "Reklamné plochy", en: "Ad placements" },
    text: {
      sk: "Natívne bannery a odporúčania priamo v článkoch a na domovskej stránke — bez rušivých reklám.",
      en: "Native banners and recommendations right inside articles and on the homepage — no intrusive ads.",
    },
  },
  {
    no: "03",
    title: { sk: "Foto & video obsah", en: "Photo & video content" },
    text: {
      sk: "Vytvorím vizuálny obsah o tvojom jedle a priestore, ktorý vieš použiť aj na vlastných kanáloch.",
      en: "I create visual content about your food and space that you can also use across your own channels.",
    },
  },
];

export function fmtRating(r: number): string {
  return r.toFixed(1).replace(".", ",") + "/5";
}

export function starColors(rating: number): string[] {
  return Array.from({ length: 5 }, (_, i) => {
    if (rating >= i + 1) return "#E0A400";
    if (rating >= i + 0.5) return "#EDC96B";
    return "rgba(20,18,15,.16)";
  });
}

export function mapsUrl(address?: string): string {
  return address ? "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(address) : "#";
}
