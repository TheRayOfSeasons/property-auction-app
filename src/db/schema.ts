import { sqliteTable, text, integer, real, AnySQLiteColumn } from 'drizzle-orm/sqlite-core';

export const bids = sqliteTable('bids', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  outbid: integer('outbid').notNull().default(0),
  active: integer('active').notNull().default(0),
  winning: integer('winning').notNull().default(0),
});

export const bidAmounts = sqliteTable('bid_amount', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  outbid: real('outbid').notNull().default(0.00),
  active: real('active').notNull().default(0.00),
  winning: real('winning').notNull().default(0.00),
});

export const properties = sqliteTable('properties', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  street: text('street').notNull().default(''),
  address: text('address').notNull().default(''),
  change: real('change').notNull().default(0.00), // negative or positive value of last bid amount
  marketValue: real('market_value').notNull().default(0.00),
  reservePrice: real('reserve_price').notNull().default(0.00),
  satelliteView: text('satellite_view').notNull().default(''),
  streetView: text('street_view').notNull().default(''),
  bid: integer('bid').references((): AnySQLiteColumn => bids.id).notNull(),
  bidAmount: integer('bid_amount').references((): AnySQLiteColumn => bidAmounts.id).notNull(),
});
