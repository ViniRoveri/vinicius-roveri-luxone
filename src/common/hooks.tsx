import { useRecoilValue, useSetRecoilState } from "recoil";
import { favoritesListState, isDarkModeState, selectedFilterState} from "./atoms";

export function useFavoritesList(){
   const favoritesList = useRecoilValue(favoritesListState)

   return favoritesList
}

export function useIsDarkMode(){
   const isDarkMode = useRecoilValue(isDarkModeState)

   return isDarkMode
}

export function useSelectedFilter(){
   const selectedFilter = useRecoilValue(selectedFilterState)

   return selectedFilter
}

export function useSetFavoritesList(){
   const setFavoritesList = useSetRecoilState(favoritesListState)

   return (newFavoritesList:any[])=>{
      setFavoritesList(newFavoritesList)
   }
}

export function useSetIsDarkMode(){
   const setIsDarkMode = useSetRecoilState(isDarkModeState)

   return (newDarkMode:boolean)=>{
      setIsDarkMode(newDarkMode)
   }
}

export function useSetSelectedFilter(){
   const setSelectedFilter = useSetRecoilState(selectedFilterState)

   return (newSelectedFilter:'repo'|'user')=>{
      setSelectedFilter(newSelectedFilter)
   }
}