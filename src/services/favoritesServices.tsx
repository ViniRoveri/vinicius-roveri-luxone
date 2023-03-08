const favoritesServices = {
   addRepoToFavorites(repo: any){
      const allFavorites = this.getAllFavorites()

      const newFavoritesArray = [...allFavorites, repo]
      
      const newFavoritesArrayString = JSON.stringify(newFavoritesArray)

      localStorage.setItem('favoriteRepos', newFavoritesArrayString)
   },

   checkRepoIsFavorite(repo: any){
      const allFavorites = this.getAllFavorites()

      const favoritesThatMatchRepo = allFavorites.filter((favorite: any)=> favorite.id === repo.id)

      const repoIsfavorite = favoritesThatMatchRepo.length > 0

      return repoIsfavorite
   },

   getAllFavorites(){
      const allFavoritesString = localStorage.getItem('favoriteRepos')
      
      if(allFavoritesString){
         const allFavorites = JSON.parse(allFavoritesString)
         
         return allFavorites
      }else{
         return []
      }
   },

   removeRepoFromFavorites(repo: any){
      const allFavorites = this.getAllFavorites()

      const newFavoritesArray = allFavorites.filter((favorite: any)=> favorite.id !== repo.id)
      
      const newFavoritesArrayString = JSON.stringify(newFavoritesArray)

      localStorage.setItem('favoriteRepos', newFavoritesArrayString)
   }
}

export default favoritesServices