import { useEffect, useState } from "react"
import RepoCard from "./RepoCard"
import SeeMoreButton from "./SeeMoreButton"
import UserCard from "./UserCard"

type Props = {
   allItems: any[]
   itemsType: 'repos' | 'users'
   limited?: boolean
}

const stylesContainer = `flex flex-col items-center mb-10 overflow-x-auto w-full`
const stylesList = `w-full`

export default function ItemsList({allItems, itemsType, limited}: Props){
   const [itemsToDisplay, setItemsToDisplay] = useState(allItems)
   const [numberItemsToDisplay, setNumberItemsToDisplay] = useState(limited ? 4 : allItems.length)

   useEffect(()=>{
      if(limited){
         const newItemsToDisplay = [...allItems].splice(0, numberItemsToDisplay)

         setItemsToDisplay(newItemsToDisplay)
      }else{
         setItemsToDisplay(allItems)
      }
   }, [allItems, numberItemsToDisplay])

   return (
      <section className={stylesContainer}>
         <ul className={stylesList}>
            {itemsToDisplay.map(item=>{
               if(itemsType === 'repos'){
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

         {limited && numberItemsToDisplay < allItems.length &&
            <SeeMoreButton numberToDisplay={numberItemsToDisplay} setNumberToDisplay={setNumberItemsToDisplay}/>
         }
      </section>
   )
}