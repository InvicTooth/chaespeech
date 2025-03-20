'use server';

import { signIn, signOut as signOutAuth } from '@/auth';

export async function signInWithGoogle() {
  await signIn('google', { redirect: true, redirectTo: '/dashboard' } );
}
export async function signInWithNaver() {
  await signIn('naver', { redirect: true, redirectTo: '/dashboard' } );
}
export async function signInWithKakao() {
  await signIn('kakao', { redirect: true, redirectTo: '/dashboard' } );
}
export async function signOut() {
  await signOutAuth({ redirect: true, redirectTo: '/' });
}