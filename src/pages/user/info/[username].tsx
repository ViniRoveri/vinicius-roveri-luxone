import DefaultHead from "@/components/DefaultHead";
import DefaultPageTitle from "@/components/DefaultPageTitle";
import ItemsList from "@/components/ItemsList";
import UserInfoBlock from "@/components/UserInfoBlock";
import userServices from "@/services/userServices";

export async function getServerSideProps(ctx: any){
   const {username} = ctx.query

   const userInfo = await userServices.getUserByUsername(username)

   const userRepos = await userServices.getReposByUsername(username)

   return {
      props: {
         userInfo: userInfo,
         userRepos: userRepos
      }
   }
}

type Props = {
   userInfo: any
   userRepos: any[]
}

const stylesContainer = `px-11 py-5`
const stylesContentContainer = `flex`

export default function UserInfoPage({userInfo, userRepos}: Props){
   return (
      <>
      <DefaultHead title={'Informações do usuário | GitHub Search'}/>

      <section className={stylesContainer}>
         <DefaultPageTitle titleText="Informações do usuário:"/>

         <section className={stylesContentContainer}>
            <UserInfoBlock userInfo={userInfo}/>

            <ItemsList allItems={userRepos} itemsType='repos'/>
         </section>
      </section>
      </>
   )
}