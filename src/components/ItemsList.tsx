import Router from "next/router"
import { useEffect, useState } from "react"
import PageSelector from "./PageSelector"
import RepoCard from "./RepoCard"
import SeeMoreButton from "./SeeMoreButton"
import UserCard from "./UserCard"

type Props = {
   allItems: any[]
   count?: number
   ctx: 'repo' | 'user'
   isUserPage?: boolean
}

const stylesContainer = `flex flex-col items-center mb-10 overflow-x-auto w-full`
const stylesList = `w-full`

export default function ItemsList({allItems, count, ctx, isUserPage}: Props){
   const initialNumberItemsToDisplay = 4

   const [itemsToDisplay, setItemsToDisplay] = useState(allItems)
   const [numberItemsToDisplay, setNumberItemsToDisplay] = useState(initialNumberItemsToDisplay)

   useEffect(()=>{
      Router.events.on('routeChangeComplete', ()=> setNumberItemsToDisplay(initialNumberItemsToDisplay))
   }, [])

   useEffect(()=>{
      const newItemsToDisplay = [...allItems].splice(0, numberItemsToDisplay)

      setItemsToDisplay(newItemsToDisplay)
   }, [allItems, numberItemsToDisplay])

   return (
      <section className={stylesContainer}>
         <ul className={stylesList}>
            {itemsToDisplay.map(item=>{
               if(ctx === 'repo'){
                  return(
                     <RepoCard key={item.id} repo={item}/>
                     )
               }else{
                  return(
                     <UserCard key={item.id} user={item}/>
                  )
               }
            })}
         </ul>

         {numberItemsToDisplay < allItems.length &&
            <SeeMoreButton isUserPage={isUserPage} numberToDisplay={numberItemsToDisplay} setNumberToDisplay={setNumberItemsToDisplay}/>
         }

         {numberItemsToDisplay >= allItems.length && count &&
            <PageSelector count={count} ctx={ctx} isUserPage={isUserPage}/>
         }
      </section>
   )
}