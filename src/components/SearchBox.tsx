import IconSearch from '@/assets/icons/IconSearch.svg'
import { useSelectedFilter } from '@/common/hooks'
import { useRouter } from 'next/router'
import { FormEvent, useRef } from 'react'

const stylesContainer = `border-2 flex h-[70px] items-center px-[25px] rounded-[10px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-[24px] w-full
hover:scale-[100.2%]`
const stylesInput = `bg-transparent h-full w-full
placeholder:text-default-darkGray
dark:placeholder:text-default-lightGray`
const stylesIcon = `cursor-pointer fill-default-black h-[34px] ml-2 w-[34px]
hover:scale-[102%]
dark:fill-default-lightGray`

export default function SearchBox(){
   const router = useRouter()
   const selectedFilter = useSelectedFilter()

   const searchInput = useRef<HTMLInputElement>(null)

   const placeholderComplement = selectedFilter === 'repo' ? 'repositório' : 'usuário'

   function handleSubmit(e:FormEvent){
      e.preventDefault()

      if(searchInput.current){
         const search = searchInput.current.value

         router.push(`/${selectedFilter}/${search}/?page=1`)
      }
   }

   return (
      <form className={stylesContainer} onSubmit={handleSubmit}>
         <input className={stylesInput} placeholder={`Buscar por ${placeholderComplement}...`} ref={searchInput} required type='text'/>

         <button type="submit">
            <IconSearch className={stylesIcon}/>
         </button>
      </form>
   )
}