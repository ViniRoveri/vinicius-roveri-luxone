import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkModeState, selectedFilterState} from "./atoms";

export function useIsDarkMode(){
   const isDarkMode = useRecoilValue(isDarkModeState)

   return isDarkMode
}

export function useSelectedFilter(){
   const selectedFilter = useRecoilValue(selectedFilterState)

   return selectedFilter
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