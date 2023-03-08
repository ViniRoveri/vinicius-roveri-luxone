import { atom } from "recoil";

export const isDarkModeState = atom<boolean>({
   key: 'isDarkModeState',
   default: false
})

export const selectedFilterState = atom<'repo'|'user'>({
   key: 'selectedFilterState',
   default: 'repo'
})