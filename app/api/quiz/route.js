import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    const result = await prisma.question.findMany();
    return NextResponse.json(
      { message: 'GET question success', data: result },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'failed to GET question' },
      { status: 500 }
    );
  }
};
