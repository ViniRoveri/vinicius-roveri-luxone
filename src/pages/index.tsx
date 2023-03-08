import DefaultGitHubIcon from "@/components/DefaultGitHubIcon";
import DefaultHead from "@/components/DefaultHead";
import FilterSelector from "@/components/FilterSelector";
import NotFoundPopup from "@/components/NotFoundPopup";
import SearchBox from "@/components/SearchBox";
import Router from "next/router";
import { useEffect, useState } from "react";

const stylesContainer = `flex flex-col gap-[46px] items-center justify-center w-full`

export default function HomePage(){
   const [displayNotFoundPopup, setDisplayNotFoundPopup] = useState(false)

   function updateDisplayNotFoundPopup(){
      const didNotFind = Router.query.err === 'repoNotFound' || Router.query.err === 'userNotFound'

      if(didNotFind){
         setDisplayNotFoundPopup(true)
      }else{
         setDisplayNotFoundPopup(false)
      }
   }

   useEffect(()=>{
      Router.events.on('routeChangeComplete', updateDisplayNotFoundPopup)
      Router.events.on('routeChangeError', updateDisplayNotFoundPopup)
   }, [])

   return (
      <>
      <DefaultHead title={'Home | GitHub Search'}/>

      <main className={stylesContainer}>
         <DefaultGitHubIcon/>

         <FilterSelector/>

         <SearchBox/>
         
         {displayNotFoundPopup &&
            <NotFoundPopup display={displayNotFoundPopup} setDisplay={setDisplayNotFoundPopup}/>
         }
      </main>
      </>
   )
}