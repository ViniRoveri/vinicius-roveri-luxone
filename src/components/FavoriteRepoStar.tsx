import IconStar from '@/assets/icons/IconStar.svg'
import { useSetFavoritesList } from '@/common/hooks'
import favoritesServices from '@/services/favoritesServices'
import { useEffect, useState } from 'react'

type Props = {
   repo: any
}

const defaultFavoriteStarStyles = `absolute bg-default-white cursor-pointer h-10 right-0 rounded-full top-[calc(100%-42px)] w-10
dark:bg-default-black
sm:h-11 sm:top-0 sm:w-11`
const stylesNonFavoriteIcon = `${defaultFavoriteStarStyles} fill-default-black
dark:fill-default-lightGray`
const stylesFavoriteIcon = `${defaultFavoriteStarStyles} fill-default-yellow`

export default function FavoriteRepoStar({repo}: Props){
   const setFavoritesList = useSetFavoritesList()
   
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
      favoritesServices.updateFavoritesList(setFavoritesList)

      updateStarStyles()
   }, [repoIsFavorite])

   return (
      <IconStar className={stylesFavoriteStar} onClick={toggleRepoIsFavorite}/>
   )
}