import IconStar from '@/assets/icons/IconStar.svg'
import favoritesServices from '@/services/favoritesServices'
import { useEffect, useState } from 'react'

type Props = {
   repo: any
}

const defaultFavoriteStarStyles = `absolute cursor-pointer h-11 right-0 top-0 w-11`
const stylesNonFavoriteIcon = `${defaultFavoriteStarStyles} fill-default-black
dark:fill-default-lightGray`
const stylesFavoriteIcon = `${defaultFavoriteStarStyles} fill-default-yellow`

export default function FavoriteRepoStar({repo}: Props){
   const [repoIsFavorite, setRepoIsFavorite] = useState<boolean>(false)
   const [stylesFavoriteStar, setStylesFavoriteStar] = useState('')

   function toggleRepoIsFavorite(){
      const newRepoIsFavorite = !repoIsFavorite

      setRepoIsFavorite(newRepoIsFavorite)

      if(newRepoIsFavorite){
         favoritesServices.addRepoToFavorites(repo)
      }else{
         favoritesServices.removeRepoFromFavorites(repo)
      }
   }

   function updateRepoIsFavorite(){
      const checkRepoIsFavorite = favoritesServices.checkRepoIsFavorite(repo)
      
      setRepoIsFavorite(checkRepoIsFavorite)
   }

   function updateStarStyles(){
      if(repoIsFavorite){
         setStylesFavoriteStar(stylesFavoriteIcon)
      }else{
         setStylesFavoriteStar(stylesNonFavoriteIcon)
      }
   }

   useEffect(()=>{
      updateRepoIsFavorite()
   }, [])

   useEffect(()=>{
      updateStarStyles()
   }, [repoIsFavorite])

   return (
      <IconStar className={stylesFavoriteStar} onClick={toggleRepoIsFavorite}/>
   )
}