import { create } from 'zustand'

type Store = {
  count: number
  token: string | null
}

export const useStore = create<Store>()((set) => ({
  token: "null",
  count: 1,
  inc: () => set(() => ({ token: "asd" })),
}))

