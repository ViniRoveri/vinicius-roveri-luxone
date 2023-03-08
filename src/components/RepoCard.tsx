import IconStar from '@/assets/icons/IconStar.svg'
import Link from 'next/link'
import FavoriteRepoStar from './FavoriteRepoStar'

type Props = {
   repo: any
}

const stylesContainer = `border-b mb-3 pb-3 overflow-x-auto relative`
const stylesTitle = `cursor-pointer font-rubik mb-2 text-[32px]
sm:text-[36px]`
const stylesText = `font-light font-rubik mb-1 text-[20px] !text-default-gray
sm:text-[24px]`
const stylesStatsContainer = `flex items-center`
const stylesStatIcon = `fill-default-black h-5 mr-1.5 w-5
dark:fill-default-lightGray
sm:h-6 sm:w-6`
const stylesStatNumber = `font-light font-rubik text-[16px] !text-default-gray
sm:text-[20px]`

export default function RepoCard({repo}: Props){
   return (
      <article className={stylesContainer}>
         <Link className={stylesTitle} href={repo.html_url} target='_blank'>{repo.name}</Link>

         <p className={stylesText}>{repo.description}</p>

         <div className={stylesStatsContainer}>
            <IconStar className={stylesStatIcon}/>

            <p className={stylesStatNumber}>{repo.stargazers_count}</p>
         </div>

         <FavoriteRepoStar repo={repo}/>
      </article>
   )
}