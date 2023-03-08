import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { useEffect } from 'react'
import { useIsDarkMode, useSetIsDarkMode } from '@/common/hooks'

const stylesContainer = `bg-default-white border-4 bottom-10 fixed left-[5%] p-2 rounded-full -translate-x-[50%] z-20
dark:bg-default-black`
const stylesIcon = `cursor-pointer h-8 w-8`

export default function DarkModeSwitcher() {
   const isDarkMode = useIsDarkMode()
   const setIsDarkMode = useSetIsDarkMode()

   function switchIsDarkMode(){
      setIsDarkMode(!isDarkMode)
   }

   useEffect(() => {
      if (isDarkMode) {
         document.documentElement.classList.add('dark')
      } else {
         document.documentElement.classList.remove('dark')
      }
   }, [isDarkMode])

   return (
      <button className={stylesContainer} onClick={()=> switchIsDarkMode()} type='button'>
         {
            isDarkMode ? 

            <SunIcon className={stylesIcon}/>
            
            :
            
            <MoonIcon className={stylesIcon}/>
         }
      </button>
   )
}