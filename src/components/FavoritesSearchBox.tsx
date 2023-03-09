import { useFavoritesList } from "@/common/hooks"
import { Dispatch, SetStateAction, useEffect, useRef } from "react"

type Props = {
   setListedFavoriteRepos: Dispatch<SetStateAction<any[]>>
}

const stylesInput = `bg-transparent border-2 block h-[70px] m-auto max-w-[780px] mb-4 px-[25px] rounded-[10px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-[20px] w-full
hover:scale-[100.2%]
placeholder:text-default-darkGray
dark:placeholder:text-default-lightGray
sm:text-[24px] sm:w-[80%]`

export default function FavoritesSearchBox({setListedFavoriteRepos}: Props){
   const favoritesList = useFavoritesList()

   const searchInput = useRef<HTMLInputElement>(null)

   function updateListedRepos(){
      if(searchInput.current){
         const search = searchInput.current.value

         const searchRegex = new RegExp(search, 'i')

         const searchedRepos = favoritesList.filter(repo=> searchRegex.test(repo.name))

         setListedFavoriteRepos(searchedRepos)
      }
   }

   useEffect(()=>{
      updateListedRepos()
   }, [favoritesList])

   return (
      <input className={stylesInput} onChange={updateListedRepos} placeholder='Buscar por favorito...' ref={searchInput} type='text'/>
   )
}