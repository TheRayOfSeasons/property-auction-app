import { db } from '@/db';
import { bidAmounts, bids, properties } from '@/db/schema';

export async function seed() {
  await (async () => {
    const bid = await db.insert(bids).values({
      outbid: 12,
      active: 24,
      winning: 12,
    }).returning({ id: bids.id });
    const bidAmount = await db.insert(bidAmounts).values({
      outbid: 100000.00,
      active: 100000.00,
      winning: 100000.00,
    }).returning({ id: bidAmounts.id });
    await db.insert(properties).values({
      street: '14 Flood St.',
      address: 'New Orleans, LA, 70122',
      change: 100.00,
      marketValue: 40000,
      reservePrice: 5000,
      bid: bid[0].id,
      bidAmount: bidAmount[0].id,
    });
  })();
  await (async () => {
    const bid = await db.insert(bids).values({
      outbid: 13,
      active: 20,
      winning: 25,
    }).returning({ id: bids.id });
    const bidAmount = await db.insert(bidAmounts).values({
      outbid: 120000.00,
      active: 140000.00,
      winning: 200000.00,
    }).returning({ id: bidAmounts.id });
    await db.insert(properties).values({
      street: '24 Washington Ave.',
      address: 'Washington DC',
      change: -100.00,
      marketValue: 50000,
      reservePrice: 5200,
      bid: bid[0].id,
      bidAmount: bidAmount[0].id,
    });
  })();
  await (async () => {
    const bid = await db.insert(bids).values({
      outbid: 14,
      active: 20,
      winning: 14,
    }).returning({ id: bids.id });
    const bidAmount = await db.insert(bidAmounts).values({
      outbid: 50000.00,
      active: 50000.00,
      winning: 70000.00,
    }).returning({ id: bidAmounts.id });
    await db.insert(properties).values({
      street: '289 Hempstead St.',
      address: 'California',
      change: 0.00,
      marketValue: 30000,
      reservePrice: 5000,
      bid: bid[0].id,
      bidAmount: bidAmount[0].id,
    });
  })();
  await (async () => {
    const bid = await db.insert(bids).values({
      outbid: 10,
      active: 15,
      winning: 10,
    }).returning({ id: bids.id });
    const bidAmount = await db.insert(bidAmounts).values({
      outbid: 200000.00,
      active: 200000.00,
      winning: 200000.00,
    }).returning({ id: bidAmounts.id });
    await db.insert(properties).values({
      street: '289 Hempstead St.',
      address: 'California',
      change: 100.00,
      marketValue: 45000,
      reservePrice: 5200,
      bid: bid[0].id,
      bidAmount: bidAmount[0].id,
    });
  })();
}

seed();
