import DefaultHead from "@/components/DefaultHead"
import searchServices from "@/services/searchServices"
import ItemsList from "@/components/ItemsList"
import PageSelector from "@/components/PageSelector"
import DefaultPageTitle from "@/components/DefaultPageTitle"

export async function getServerSideProps(ctx: any){
   const {search} = ctx.query
   const {page} = ctx.query

   const searchUsers = await searchServices.getSearchUsers(search, page)

   const allUsers = searchUsers.items
   const usersCount = searchUsers.total_count

   if(allUsers.length > 0){
      return {
         props: {
            allUsers: allUsers,
            usersCount: usersCount
         }
      }
   }else{
      return {
         redirect: {
            destination: '/?err=userNotFound',
            permanent: false
         }
      }
   }
}

type Props = {
   allUsers: any[]
   usersCount: number
}

const stylesContainer = `mb-10 px-11 py-5`

export default function UserSearchPage({allUsers, usersCount}: Props){
   return (
      <>
      <DefaultHead title={'Busca de usuários | GitHub Search'}/>

      <section className={stylesContainer}>
         <DefaultPageTitle titleText="Usuários encontrados:"/>

         <ItemsList allItems={allUsers} itemsType='users'/>

         <PageSelector count={usersCount} ctx='user'/>
      </section>
      </>
   )
}