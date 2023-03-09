import { atom } from "recoil";

export const favoritesListState = atom<any[]>({
   key: 'favoritesListState',
   default: []
})

export const isDarkModeState = atom<boolean>({
   key: 'isDarkModeState',
   default: false
})

export const selectedFilterState = atom<'repo'|'user'>({
   key: 'selectedFilterState',
   default: 'repo'
})