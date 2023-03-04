import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkModeState} from "./atoms";

export function useIsDarkMode(){
   const isDarkMode = useRecoilValue(isDarkModeState)

   return isDarkMode
}

export function useSetIsDarkMode(){
   const setIsDarkMode = useSetRecoilState(isDarkModeState)

   return (newDarkMode:boolean)=>{
      setIsDarkMode(newDarkMode)
   }
}