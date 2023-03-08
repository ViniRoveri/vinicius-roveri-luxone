import DefaultHead from "@/components/DefaultHead"
import ItemsList from "@/components/ItemsList"
import searchServices from "@/services/searchServices"
import PageSelector from "@/components/PageSelector"
import DefaultPageTitle from "@/components/DefaultPageTitle"

export async function getServerSideProps(ctx: any){
   const {search} = ctx.query
   const {page} = ctx.query

   const searchRepos = await searchServices.getSearchRepos(search, page)

   const allRepos = searchRepos.items
   const reposCount = searchRepos.total_count

   if(allRepos.length > 0){
      return {
         props: {
            allRepos: allRepos,
            reposCount: reposCount
         }
      }
   }else{
      return {
         redirect: {
            destination: '/?err=repoNotFound',
            permanent: false
         }
      }
   }
}

type Props = {
   allRepos: any[],
   reposCount: number
}

const stylesContainer = `mb-10 px-11 py-5`

export default function RepoSearchPage({allRepos, reposCount}: Props){
   return (
      <>
      <DefaultHead title={'Busca de repositórios | GitHub Search'}/>

      <section className={stylesContainer}>
         <DefaultPageTitle titleText="Repositórios encontrados:"/>

         <ItemsList allItems={allRepos} itemsType='repos'/>

         <PageSelector count={reposCount} ctx='repo'/>
      </section>
      </>
   )
}