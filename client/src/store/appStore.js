import { create } from 'zustand'

export const useStore = create((set) => ({
  id: '',
  setId: (data) => set((state) => ({ id: (state.id = data) })),
  unsetId: () => set((state) => ({ id: (state.id = '') })),
  eventQueries: undefined,
  setEventQueries: (data) => set((state) => ({eventQueries: (state.eventQueries = data)}))
}))