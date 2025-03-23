// /app/lib/store.ts
import { create } from 'zustand';
import type { Profile } from '@/app/lib/definitions';
import { getSiteOwnerProfile } from './profile';

interface SiteOwnerProfileState {
  profile: Profile | null;
  fetchProfile: () => Promise<void>;
}

export const useSiteOwnerProfileStore = create<SiteOwnerProfileState>((set, get) => ({
  profile: null,
  fetchProfile: async () => {
    if (get().profile) return;
    const profile = await getSiteOwnerProfile();
    set({ profile });
  },
}));
