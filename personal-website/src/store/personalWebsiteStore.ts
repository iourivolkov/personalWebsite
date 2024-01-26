import { create } from "zustand";

interface PersonalWebsiteState {
  isMenuOpen: boolean;
}

export interface PersonalWebsiteActions {
  setIsMenuOpen: (menu: boolean) => void;
}

export const usePersonalWebsiteStore = create<
  PersonalWebsiteState & PersonalWebsiteActions
>((set) => ({
  isMenuOpen: false,
  setIsMenuOpen: (menu) =>
    set({
      isMenuOpen: menu,
    }),
}));
