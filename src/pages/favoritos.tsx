import { useFavoritesList, useSetFavoritesList } from "@/common/hooks";
import DefaultHead from "@/components/DefaultHead";
import DefaultPageTitle from "@/components/DefaultPageTitle";
import FavoritesSearchBox from "@/components/FavoritesSearchBox";
import ItemsList from "@/components/ItemsList";
import favoritesServices from "@/services/favoritesServices";
import { useEffect, useState } from "react";

const stylesContainer = `mb-10 px-11 py-5 m-auto max-w-[1920px]`
const stylesWarning = `font-bold text-[30px] text-center`

export default function FavoritosPage(){
   const favoritesList = useFavoritesList()
   const setFavoritesList = useSetFavoritesList()

   const [listedFavoriteRepos, setListedFavoriteRepos] = useState<any[]>([])

   useEffect(()=>{
      favoritesServices.updateFavoritesList(setFavoritesList)

      setListedFavoriteRepos(favoritesList)
   }, [])

   return (
      <>
      <DefaultHead title={'Repositórios favoritos | GitHub Search'}/>

      <section className={stylesContainer}>
         <DefaultPageTitle titleText="Repositórios Favoritos"/>

         <FavoritesSearchBox setListedFavoriteRepos={setListedFavoriteRepos}/>

         <ItemsList allItems={listedFavoriteRepos} ctx='repo'/>
         
         {listedFavoriteRepos.length === 0 && 
            <p className={stylesWarning}>Nenhum repositório favorito encontrado.</p>
         }
      </section>
      </>
   )
}