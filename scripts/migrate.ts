import { db } from '../src/db';
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';

migrate(db, { migrationsFolder: './src/drizzle' });
