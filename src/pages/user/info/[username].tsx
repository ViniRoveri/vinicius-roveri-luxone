import DefaultHead from "@/components/DefaultHead";
import DefaultPageTitle from "@/components/DefaultPageTitle";
import ItemsList from "@/components/ItemsList";
import UserInfoBlock from "@/components/UserInfoBlock";
import userServices from "@/services/userServices";

export async function getServerSideProps(ctx: any){
   const {username} = ctx.query
   const {page} = ctx.query

   const userInfo = await userServices.getUserByUsername(username)

   const userRepos = await userServices.getReposByUsername(username, page)

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

const stylesContainer = `px-11 py-5 m-auto max-w-[1920px]`
const stylesContentContainer = `flex flex-col
sm:flex-row`

export default function UserInfoPage({userInfo, userRepos}: Props){
   return (
      <>
      <DefaultHead title={'Informações do usuário | GitHub Search'}/>

      <section className={stylesContainer}>
         <DefaultPageTitle titleText="Informações do usuário:"/>

         <section className={stylesContentContainer}>
            <UserInfoBlock userInfo={userInfo}/>

            <ItemsList allItems={userRepos} count={userInfo.public_repos} ctx='repo' isUserPage/>
         </section>
      </section>
      </>
   )
}