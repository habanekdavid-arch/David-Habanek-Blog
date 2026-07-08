import { readFileSync } from "node:fs";
import path from "node:path";
import { getPool } from "../lib/db";

async function main() {
  const sql = readFileSync(path.join(process.cwd(), "lib/db/schema.sql"), "utf8");
  await getPool().query(sql);
  console.log("Migration applied: articles table is ready.");
  await getPool().end();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
