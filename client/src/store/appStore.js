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

export const useDevStore = create((set) => ({
  add: false,
  toggleCreateOff: () => set((state) => ({ add: (state.add = false)})),
  toggleCreateOn: () => set((state) => ({ add: (state.add = true)})),
  edit: false,
  toggleEditOff: () => set((state) => ({ edit: (state.edit = false)})),
  toggleEditOn: () => set((state) => ({ edit: (state.edit = true)})),
  details: false,
  toggleDetailsOff: () => set((state) => ({ details: (state.details = false)})),
  toggleDetailsOn: () => set((state) => ({ details: (state.details = true)})),
  del: false,
  toggleDeleteOff: () => set((state) => ({ del: (state.del = false)})),
  toggleDeleteOn: () => set((state) => ({ del: (state.del = true)})),
  id: '',
  title: '',
  created: '',
  content: '',
  setId: (data) => set((state) => ({id: (state.id = data)})),
  setCreated: (data) => set((state) => ({created: (state.created = data)})),
  setTitle: (data) => set((state) => ({title: (state.title = data)})),
  setEntry: (data) => set((state) => ({entry: (state.entry = data)})),
}))