import { db } from '@/db';
import { properties } from '@/db/schema';
import { type NextRequest, NextResponse } from 'next/server';

const DEFAULT_COUNT = 10;

const action = async (count: number) => {
  const result = await db
    .select({
      id: properties.id,
      street: properties.street,
      change: properties.change,
      reservePrice: properties.reservePrice,
    })
    .from(properties)
    .limit(count);
  return {
    properties: result,
  };
}

export type TickerResponse = Awaited<ReturnType<typeof action>>;
export type TickerProperty = TickerResponse['properties'][0];

/**
 * @swagger
 * definitions:
 *   TickerResponse:
 *     properties:
 *       properties:
 *         type: array
 *         items:
 *           type: object
 *           properties:
 *             id:
 *               type: integer
 *             street:
 *               type: string
 *             change:
 *               type: number
 *             reservePrice:
 *               type: number
 */

/**
 * @swagger
 * /api/ticker:
 *   get:
 *     description: The ticker endpoint that returns a given amount of properties.
 *     parameters:
 *       - in: query
 *         name: count
 *         type: integer
 *         required: true
 *         description: The amount of properties to return.
 *     responses:
 *       200:
 *         description: An array of properties
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/TickerResponse'
 */
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  let count = DEFAULT_COUNT;
  const rawCount = searchParams.get('count');
  if (rawCount) {
    try {
      count = Number(rawCount);
    } catch(error) {
      // Do nothing. We assume default count.
    }
  }
  return NextResponse.json(await action(count));
}
