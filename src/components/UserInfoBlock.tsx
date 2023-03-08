import UserInfoListItem from "./UserInfoListItem"
import IconOrganization from '@/assets/icons/IconOrganization.svg' 
import IconLocation from '@/assets/icons/IconLocation.svg' 
import IconRepository from '@/assets/icons/IconRepository.svg' 
import IconFollowers from '@/assets/icons/IconFollowers.svg' 

type Props = {
   userInfo: any
}

const stylesContainer = `bg-default-lightGray flex flex-col items-center h-min max-w-[340px] px-5 py-4 mr-[70px] rounded-[5px] w-full
dark:bg-default-gray`
const stylesContentContainer = `flex flex-col items-start w-full`
const stylesImage = `rounded-[5px] shadow-[0_0_10px_10px_rgba(0,0,0,0.1)] w-full 
dark:shadow-[0_0_10px_10px_rgba(255,255,255,0.1)]`
const stylesName = `font-light font-rubik text-[36px] !text-default-black`
const stylesLogin = `font-light font-rubik mb-11 text-[24px] text-default-gray
dark:text-default-darkGray`

export default function UserInfoBlock({userInfo}: Props){
   return (
      <article className={stylesContainer}>
         <img alt={`Foto de perfil do usuário ${userInfo.login}`} className={stylesImage} src={userInfo.avatar_url} />

         <div className={stylesContentContainer}>
            <h2 className={stylesName}>{userInfo.name}</h2>

            <h3 className={stylesLogin}>{userInfo.login}</h3>

            {userInfo.company &&
               <UserInfoListItem Icon={IconOrganization} text={userInfo.company}/>
            }
            
            {userInfo.location &&
               <UserInfoListItem Icon={IconLocation} text={userInfo.location}/>
            }
            
            {userInfo.public_repos &&
               <UserInfoListItem Icon={IconRepository} text={userInfo.public_repos}/>
            }
            
            {userInfo.followers &&
               <UserInfoListItem Icon={IconFollowers} text={userInfo.followers}/>
            }
         </div>
      </article>
   )
}