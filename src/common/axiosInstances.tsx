import axios from "axios";

export const axiosGithubApiSearch = axios.create({
   baseURL: 'https://api.github.com/search/'
})

export const axiosGithubApiUsers = axios.create({
   baseURL: 'https://api.github.com/users/'
})