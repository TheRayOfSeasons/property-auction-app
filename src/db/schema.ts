import { sqliteTable, text, integer, real, AnySQLiteColumn } from 'drizzle-orm/sqlite-core';

export const bids = sqliteTable('bids', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  outbid: integer('outbid'),
  active: integer('active'),
  winning: integer('winning'),
});

export const bidAmounts = sqliteTable('bid_amount', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  outbid: real('outbid'),
  active: real('active'),
  winning: real('winning'),
});

export const properties = sqliteTable('properties', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  street: text('street'),
  address: text('address'),
  change: real('change'),
  marketValue: real('market_value'),
  reservePrice: real('reserve_price'),
  bid: integer('bid').references((): AnySQLiteColumn => bids.id),
  bidAmount: integer('bid_amount').references((): AnySQLiteColumn => bidAmounts.id),
});
