import RepoCard from "./RepoCard"
import UserCard from "./UserCard"

type Props = {
   allItems: any[]
   itemsType: 'repos' | 'users'
}

export default function ItemsList({allItems, itemsType}: Props){
   return (
      <ul>
         {allItems.map(item=>{
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
   )
}