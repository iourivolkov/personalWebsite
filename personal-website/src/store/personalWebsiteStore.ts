import { create } from "zustand";

interface PersonalWebsiteState {
  isMenuOpen: boolean;
  isModalOpen: boolean;
}

export interface PersonalWebsiteActions {
  setIsMenuOpen: (menu: boolean) => void;
  setIsModalOpen: (modal: boolean) => void;
}

export const usePersonalWebsiteStore = create<
  PersonalWebsiteState & PersonalWebsiteActions
>((set) => ({
  isMenuOpen: false,
  isModalOpen: false,
  setIsModalOpen: (modal) =>
    set({
      isModalOpen: modal,
    }),
  setIsMenuOpen: (menu) =>
    set({
      isMenuOpen: menu,
    }),
}));
