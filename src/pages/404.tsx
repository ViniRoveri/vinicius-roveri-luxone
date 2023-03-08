import DefaultHead from "@/components/DefaultHead";
import DefaultGitHubIcon from "@/components/DefaultGitHubIcon";

const stylesContainer = `flex flex-col gap-[46px] items-center justify-center text-center w-full`
const stylesTexts = `flex flex-col font-bold gap-[32px] items-center justify-between text-[36px]
sm:text-[48px]`

export default function Page404(){
   return (
      <>
      <DefaultHead title={'404 | GitHub Search'}/>

      <main className={stylesContainer}>
         <DefaultGitHubIcon/>

         <div className={stylesTexts}>
            <p>Desculpe!</p>
            
            <p>404</p>
            
            <p>Página não encontrada!</p>
         </div>
      </main>
      </>
   )
}