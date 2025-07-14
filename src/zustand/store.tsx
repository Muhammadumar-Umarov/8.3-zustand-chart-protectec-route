import { create } from 'zustand'

type Store = {
  token: string | null
  saveToken: (payload: string) => void

}
export const savedToken = localStorage.getItem("accessToken")

export const useStore = create<Store>()((set) => ({
  token: savedToken,
  saveToken: (payload) => {
    localStorage.setItem("accessToken", payload)
    return set(()=> ({token:payload}))
  }
      
}))


