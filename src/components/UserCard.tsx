import { useRouter } from "next/router"

type Props = {
   user: any
}

const stylesContainer = `cursor-pointer flex gap-8 h-[120px] my-9 mx-auto p-3.5 overflow-x-auto overflow-y-hidden rounded-[10px] shadow-[0_0_10px_10px_rgba(0,0,0,0.1)] w-[99%]
dark:shadow-[0_0_10px_10px_rgba(255,255,255,0.1)]
sm:h-[170px]`
const stylesImage = `drop-shadow-[0_0_4px_rgb(0,0,0)] h-full rounded-[5px]
dark:drop-shadow-[0_0_4px_rgb(255,255,255)]`
const stylesTitle = `font-rubik font-light text-[36px]`

export default function UserCard({user}: Props){
   const router = useRouter()

   function handleCardClick(){
      router.push(`/user/info/${user.login}`)
   }

   return (
      <article className={stylesContainer} onClick={handleCardClick}>
         <img alt={`Foto de perfil do usuário ${user.login}`} className={stylesImage} src={user.avatar_url}/>

         <h2 className={stylesTitle}>{user.login}</h2>
      </article>
   )
}