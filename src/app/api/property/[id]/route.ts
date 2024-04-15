import { db } from '@/db';
import { bidAmounts, bids, properties } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { NextResponse } from 'next/server';
 
interface Params {
  params: {
    id: string
  }
};

const action = async (id: number) => {
  const result = await db
    .select()
    .from(properties)
    .innerJoin(bids, eq(bids.id, properties.bid))
    .innerJoin(bidAmounts, eq(bidAmounts.id, properties.bidAmount))
    .where(eq(properties.id, id))
    .limit(1);
  const row = result[0];
  return {
    ...row.properties,
    bid: row.bids,
    bidAmount: row.bid_amount,
  };
}

type ErrorResponse = {
  msg: string
}

type MainResponse = ReturnType<typeof action>;

export type Response = MainResponse | ErrorResponse;

export async function GET(request: Request, { params }: Params) {
  let id: number;
  try {
    id = Number(params.id);
  } catch (error) {
    return NextResponse.json({ msg: 'ID must be parseable to an INT.' });
  }
  return NextResponse.json(await action(id));
}
