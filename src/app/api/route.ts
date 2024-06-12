import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

/**
 * @swagger
 * /api:
 *   get:
 *     description: The root API endpoint for health checks.
 *     responses:
 *       200:
 *         msg: Running
 *         ip: IP address of the requester
 */
export async function GET(request: Request) {
  return NextResponse.json({
    msg: 'Running',
    ip: headers().get('x-forwarded-for')
  });
}
