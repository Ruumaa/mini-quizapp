import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

// send score
export const PATCH = async (req, context) => {
  try {
    const { params } = context;

    const { score } = await req.json();
    const response = await prisma.user.update({
      where: {
        id: params.id,
      },
      data: {
        score: score,
      },
    });
    return NextResponse.json(
      { message: 'PATCH user score success', data: response },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'POST user score failed', error: error },
      { status: 500 }
    );
  }
};
