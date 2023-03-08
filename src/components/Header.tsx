import NavBar from "./NavBar";

const stylesHeader = `bg-default-lightGray flex h-[84px] items-center justify-between px-[5%] shadow-[0_4px_4px_rgba(0,0,0,0.25)] w-full`
const defaultTitleStyles = `text-[22px] 
dark:text-default-black
sm:text-[32px]`
const stylesFirstTitle = `${defaultTitleStyles} font-bold`
const stylesSecondTitle = `${defaultTitleStyles} font-medium italic`

export default function Header(){
   return (
      <header className={stylesHeader}>
         <h1>
            <b className={stylesFirstTitle}>GitHub</b> <b className={stylesSecondTitle}>Search</b>
         </h1>

         <NavBar/>
      </header>
   )
}