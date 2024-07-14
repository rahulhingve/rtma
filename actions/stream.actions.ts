'use server';


import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import { StreamClient } from '@stream-io/node-sdk';
import { getServerSession } from 'next-auth';



const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user) throw new Error('User is not authenticated');
  if (!apiKey) throw new Error('Stream API key secret is missing');
  if (!apiSecret) throw new Error('Stream API secret is missing');

  const client = new StreamClient(apiKey, apiSecret);

  const exp = Math.floor(Date.now() / 1000) + 3600;
  const issuedAt = Math.floor(Date.now() / 1000) - 60;

  const token = client.createToken(session.user.id, exp, issuedAt);

  return token;
};