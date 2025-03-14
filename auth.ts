import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
// import Naver from 'next-auth/providers/naver';
// import Kakao from 'next-auth/providers/kakao';
import { authConfig } from './auth.config';
import { prisma } from '@/prisma/client';
import { PrismaAdapter } from "@auth/prisma-adapter";


async function findUserByEmail(email: string){
  try {
    const user = await prisma.user.findFirst({
      where: { email },
    });
    return user;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const { auth, signIn, signOut, handlers } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(prisma),
  providers: [
    Google,
    // Naver,
    // Kakao,
  ],
});