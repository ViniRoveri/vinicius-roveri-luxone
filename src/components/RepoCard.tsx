import IconStar from '@/assets/icons/IconStar.svg'
import FavoriteRepoStar from './FavoriteRepoStar'

type Props = {
   repo: any
}

const stylesContainer = `border-b mb-3 pb-3 relative`
const stylesTitle = `font-rubik mb-2 text-[36px]`
const stylesText = `font-light font-rubik mb-1 text-[24px] !text-default-gray`
const stylesStatsContainer = `flex items-center`
const stylesStatIcon = `fill-default-black h-6 mr-1.5 w-6
dark:fill-default-lightGray`
const stylesStatNumber = `font-light font-rubik text-[20px] !text-default-gray`

export default function RepoCard({repo}: Props){
   return (
      <article className={stylesContainer}>
         <h2 className={stylesTitle}>{repo.name}</h2>

         <p className={stylesText}>{repo.description}</p>

         <div className={stylesStatsContainer}>
            <IconStar className={stylesStatIcon}/>

            <p className={stylesStatNumber}>{repo.stargazers_count}</p>
         </div>

         <FavoriteRepoStar repo={repo}/>
      </article>
   )
}