import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

async function main() {
  require('dotenv').config();

  const DATABASE_URL = process.env.DATABASE_URL;
  if (!DATABASE_URL) {
    throw new Error('DATABASE_URL is not set');
  }

  const sql = postgres(DATABASE_URL, { max: 1 });
  const db = drizzle(sql);

  console.log('Running migrations');
  await migrate(db, { migrationsFolder: 'drizzle' });

  console.log('Migrated successfully');
  process.exit(0);
}

// pnpx vite-node migrate.ts
main().catch((e) => {
  console.error('Migration failed');
  console.error('➜', e);
  process.exit(1);
});
