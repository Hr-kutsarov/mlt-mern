import { create } from 'zustand'

export const useEventStore = create((set) => ({
  id: '',
  setId: (data) => set((state) => ({ id: (state.id = data) })),
  unsetId: () => set((state) => ({ id: (state.id = '') })),
  title: '',
  setTitle: (data) => set((state) => ({ title: (state.title = data) })),
  unsetTitle: () => set((state) => ({ title: (state.title = '') })),
  summary: '',
  setSummary: (data) => set((state) => ({ summary: (state.summary = data) })),
  unsetSummary: () => set((state) => ({ summary: (state.summary = '') })),
  content: '',
  setContent: (data) => set((state) => ({ content: (state.content = data) })),
  unsetContent: () => set((state) => ({ content: (state.content = '') })),
  pictureUrl: '',
  setPictureUrl: (data) => set((state) => ({ pictureUrl: (state.pictureUrl = data)})),
  unsetPictureUrl: () => set((state) => ({ pictureUrl: (state.pictureUrl = '')}))
}))