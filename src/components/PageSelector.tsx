import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

type Props = {
   count: number
   ctx: 'repo' | 'user'
}

const stylesContainer = `flex gap-4 items-center justify-center my-5 text-center w-full`
const stylesIcon = `border cursor-pointer h-8 rounded-md w-8`
const stylesText = `font-rubik text-[24px]`

export default function PageSelector({count, ctx}: Props){
   const router = useRouter()

   const {search} = router.query

   const currentPage = Number(router.query.page)
   const itemsPerPage = 30
   const totalPages = Math.ceil(count / itemsPerPage)
   const numberOfPages = totalPages > 33 ? 33 : totalPages

   const itsNotFirstPage = currentPage !== 1
   const itsNotLastPage = currentPage !== numberOfPages

   function gotToFirstPage(){
      if(itsNotFirstPage){
         router.push(`/${ctx}/${search}/?page=1`)
      }
   }
   
   function gotToLastPage(){
      if(itsNotLastPage){
         router.push(`/${ctx}/${search}/?page=${numberOfPages}`)
      }
   }
   
   function gotToNextPage(){
      if(itsNotLastPage){
         router.push(`/${ctx}/${search}/?page=${currentPage + 1}`)
      }
   }
   
   function gotToPreviousPage(){
      if(itsNotFirstPage){
         router.push(`/${ctx}/${search}/?page=${currentPage - 1}`)
      }
   }

   return (
      <>{!Number.isNaN(currentPage) && numberOfPages > 1 &&
      <div className={stylesContainer}>
         <ChevronDoubleLeftIcon className={stylesIcon} onClick={gotToFirstPage}/>

         <ChevronLeftIcon className={stylesIcon} onClick={gotToPreviousPage}/>

         <p className={stylesText}>Página {currentPage} de {numberOfPages}</p>

         <ChevronRightIcon className={stylesIcon} onClick={gotToNextPage}/>

         <ChevronDoubleRightIcon className={stylesIcon} onClick={gotToLastPage}/>
      </div>
      }</>
   )
}