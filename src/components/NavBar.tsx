import Link from "next/link"
import Router from "next/router"
import { useEffect, useState } from "react"

const stylesContainer = `flex items-center justify-end`
const stylesText = `cursor-pointer font-bold font-inter text-[20px] 
last:ml-4
hover:scale-[101%]
dark:text-default-black
sm:last:ml-16`
const stylesActiveText = `!text-default-red
dark:!text-default-red`

export default function NavBar(){
   const [activeItem, setActiveItem] = useState<'inicio'|'favoritos'|''>('inicio')

   function updateActiveItem(){
      const pathname = Router.pathname

      if(pathname === '/'){
         setActiveItem('inicio')
      }else if(pathname === '/favoritos'){
         setActiveItem('favoritos')
      }else{
         setActiveItem('')
      }
   }

   useEffect(()=>{
      updateActiveItem()

      Router.events.on('routeChangeComplete', updateActiveItem)
      Router.events.on('routeChangeError', updateActiveItem)
   }, [])

   return (
      <nav className={stylesContainer}>
         <Link className={`${stylesText} ${activeItem === 'inicio' ? stylesActiveText : ''}`} href='/'>
            Início
         </Link>

         <Link className={`${stylesText} ${activeItem === 'favoritos' ? stylesActiveText : ''}`} href='/favoritos'>
            Favoritos
         </Link>
      </nav>
   )
}