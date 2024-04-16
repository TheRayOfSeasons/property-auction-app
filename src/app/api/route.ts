import { NextResponse } from 'next/server';
 
/**
 * @swagger
 * /api:
 *   get:
 *     description: The root API endpoint for health checks.
 *     responses:
 *       200:
 *         msg: Running
 */
export async function GET(request: Request) {
  return NextResponse.json({ msg: 'Running' });
}
