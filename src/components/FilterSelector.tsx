import { useSelectedFilter, useSetSelectedFilter } from "@/common/hooks"

const stylesContainer = `flex gap-10 items-center justify-center text-[18px] w-full
sm:text-[20px]`
const defaultButtonStyles = `border-2 cursor-pointer font-bold h-[50px] rounded-[5px] text-center w-[186px]
hover:scale-[101%]`
const deselectedButtonStyles = `${defaultButtonStyles} bg-default-transparent`
const selectedButtonStyles = `${defaultButtonStyles} bg-default-black text-default-lightGray
dark:bg-default-lightGray dark:text-default-black`

export default function FilterSelector(){
   const selectedFilter = useSelectedFilter()
   const setSelectedFilter = useSetSelectedFilter()

   const stylesRepoButton = selectedFilter === 'repo' ? selectedButtonStyles : deselectedButtonStyles
   const stylesUserButton = selectedFilter === 'user' ? selectedButtonStyles : deselectedButtonStyles

   return (
      <div className={stylesContainer}>
         <button className={stylesRepoButton} onClick={()=>setSelectedFilter('repo')} type="button">Repositório</button>

         <button className={stylesUserButton} onClick={()=>setSelectedFilter('user')} type="button">Usuário</button>
      </div>
   )
}