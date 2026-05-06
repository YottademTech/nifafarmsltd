import { create } from 'zustand'

interface AppStore {
  scrolled: boolean
  mobileMenuOpen: boolean
  setScrolled: (v: boolean) => void
  setMobileMenuOpen: (v: boolean) => void
}

export const useAppStore = create<AppStore>((set) => ({
  scrolled: false,
  mobileMenuOpen: false,
  setScrolled: (v) => set({ scrolled: v }),
  setMobileMenuOpen: (v) => set({ mobileMenuOpen: v }),
}))
