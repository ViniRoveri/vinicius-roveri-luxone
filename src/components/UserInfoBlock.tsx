import UserInfoListItem from "./UserInfoListItem"
import IconOrganization from '@/assets/icons/IconOrganization.svg' 
import IconLocation from '@/assets/icons/IconLocation.svg' 
import IconRepository from '@/assets/icons/IconRepository.svg' 
import IconFollowers from '@/assets/icons/IconFollowers.svg' 
import Link from "next/link"

type Props = {
   userInfo: any
}

const stylesContainer = `bg-default-lightGray flex flex-col items-center h-min max-w-[340px] mb-10 mx-auto px-5 py-4 rounded-[5px] w-full
dark:bg-default-gray
sm:mb-0 sm:mr-[70px]`
const stylesContentContainer = `flex flex-col items-start overflow-x-auto w-full`
const stylesImage = `rounded-[5px] shadow-[0_0_10px_10px_rgba(0,0,0,0.1)] w-full 
dark:shadow-[0_0_10px_10px_rgba(255,255,255,0.1)]`
const stylesName = `cursor-pointer font-light font-rubik text-[36px] !text-default-black`
const stylesLogin = `font-light font-rubik mb-11 text-[24px] text-default-gray
dark:text-default-darkGray`

export default function UserInfoBlock({userInfo}: Props){
   return (
      <article className={stylesContainer}>
         <img alt={`Foto de perfil do usuário ${userInfo.login}`} className={stylesImage} src={userInfo.avatar_url} />

         <div className={stylesContentContainer}>
            <Link className={stylesName} href={userInfo.html_url} target='_blank'>{userInfo.name}</Link>

            <h3 className={stylesLogin}>{userInfo.login}</h3>

            {userInfo.company &&
               <UserInfoListItem Icon={IconOrganization} text={userInfo.company}/>
            }
            
            {userInfo.location &&
               <UserInfoListItem Icon={IconLocation} text={userInfo.location}/>
            }
            
            {userInfo.public_repos > 0 &&
               <UserInfoListItem Icon={IconRepository} text={userInfo.public_repos}/>
            }
            
            {userInfo.followers > 0 &&
               <UserInfoListItem Icon={IconFollowers} text={userInfo.followers}/>
            }
         </div>
      </article>
   )
}