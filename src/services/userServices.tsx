import { axiosGithubApiUsers } from "@/common/axiosInstances"

const userServices = {
   async getReposByUsername(username: string, page: string){
      const userRepos = await axiosGithubApiUsers.get(
         `${username}/repos?page=${page}&direction=desc`
      )
      .then(res=> res.data)

      return userRepos
   },

   async getUserByUsername(username: string){
      const userInfo = await axiosGithubApiUsers.get(
         `${username}`
      )
      .then(res=> res.data)

      return userInfo
   }
}

export default userServices