import { axiosGithubApiSearch } from "@/common/axiosInstances"

const searchServices = {
   async getSearchRepos(search: string, page: string){
      try{
         const searchRepos = await axiosGithubApiSearch.get(
            `repositories?q=${search}&page=${page}`
         )
         .then(res=> res.data)

         return searchRepos
      }catch(err){
         console.log(err)
      }
   },

   async getSearchUsers(search: string, page: string){
      try{
         const allUsers = await axiosGithubApiSearch.get(
            `users?q=${search}&page=${page}`
         )
         .then(res=> res.data)

         return allUsers
      }catch(err){
         console.log(err)
      }
   }
}

export default searchServices