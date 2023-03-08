import DefaultHead from "@/components/DefaultHead";
import DefaultPageTitle from "@/components/DefaultPageTitle";
import FavoritesSearchBox from "@/components/FavoritesSearchBox";
import ItemsList from "@/components/ItemsList";
import favoritesServices from "@/services/favoritesServices";
import { useEffect, useState } from "react";

const stylesContainer = `mb-10 px-11 py-5 m-auto max-w-[1920px]`
const stylesWarning = `font-bold text-[30px] text-center`

export default function FavoritosPage(){
   const [allFavoriteRepos, setAllFavoriteRepos] = useState<any[]>([])
   const [favoriteRepos, setFavoriteRepos] = useState<any[]>([])

   useEffect(()=>{
      const allFavorites = favoritesServices.getAllFavorites()

      setAllFavoriteRepos(allFavorites)

      setFavoriteRepos(allFavorites)
   }, [])

   return (
      <>
      <DefaultHead title={'Repositórios favoritos | GitHub Search'}/>

      <section className={stylesContainer}>
         <DefaultPageTitle titleText="Repositórios Favoritos"/>

         <FavoritesSearchBox allFavoriteRepos={allFavoriteRepos} setFavoriteRepos={setFavoriteRepos}/>

         <ItemsList allItems={favoriteRepos} itemsType='repos' limited/>
         
         {favoriteRepos.length === 0 && 
            <p className={stylesWarning}>Nenhum repositório favorito encontrado.</p>
         }
      </section>
      </>
   )
}