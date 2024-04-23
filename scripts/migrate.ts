import { db } from '../src/db';
import { migrate } from 'drizzle-orm/libsql/migrator';

migrate(db, { migrationsFolder: './src/drizzle' });
