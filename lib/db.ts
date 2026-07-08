import { Pool } from "pg";

declare global {
  var __dbPool: Pool | undefined;
}

function createPool(): Pool {
  const connectionString = process.env.POSTGRES_URL;
  if (!connectionString) {
    throw new Error(
      "POSTGRES_URL is not set. Create a Postgres database (Vercel Storage tab, or a local one for dev) and set POSTGRES_URL in your environment."
    );
  }
  const isLocal = /localhost|127\.0\.0\.1/.test(connectionString);
  return new Pool({
    connectionString,
    ssl: isLocal ? false : { rejectUnauthorized: false },
  });
}

export function getPool(): Pool {
  if (!global.__dbPool) {
    global.__dbPool = createPool();
  }
  return global.__dbPool;
}
