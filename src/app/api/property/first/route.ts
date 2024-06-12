import { db } from '@/db';
import { bidAmounts, bids, properties } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { NextResponse } from 'next/server';

const action = async () => {
  const result = await db
    .select()
    .from(properties)
    .innerJoin(bids, eq(bids.id, properties.bid))
    .innerJoin(bidAmounts, eq(bidAmounts.id, properties.bidAmount))
    .limit(1);
  const row = result[0];
  return {
    ...row.properties,
    bid: row.bids,
    bidAmount: row.bid_amount,
  };
}

export type PropertyFindFirstResponse = Awaited<ReturnType<typeof action>>;

/**
 * @swagger
 * /api/property/first:
 *   get:
 *     description: Retrieves all data from the first property.
 *     responses:
 *       200:
 *         description: All the details from a property.
 */
export async function GET(request: Request) {
  console.log(request); // https://nextjs.org/docs/app/building-your-application/routing/route-handlers#behavior prevent caching
  return NextResponse.json(await action());
}
