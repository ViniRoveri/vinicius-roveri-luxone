import IconExclamation from '@/assets/icons/IconExclamation.svg'
import { useRouter } from 'next/router'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

type Props = {
   display: boolean
   setDisplay: Dispatch<SetStateAction<boolean>>
}

const stylesBackground = `bg-[rgba(0,0,0,0.6);] fixed flex h-full items-center justify-center left-0 text-center top-0 w-full z-10`
const stylesContainer = `bg-default-white flex flex-col h-[547px] items-center justify-evenly max-w-[444px] p-5 rounded-[15px]`
const stylesIcon = `h-[100px] fill-default-red w-[100px]`
const stylesTitle = `font-medium text-[48px] !text-default-black`
const stylesText = `text-[24px] !text-default-black`
const stylesButton = `bg-default-red cursor-pointer font-semibold px-6 rounded-[10px] text-[40px] !text-default-white
hover:scale-[101%]`

export default function NotFoundPopup(props: Props){
   const router = useRouter()

   const {err} = router.query

   const [errorMessageComplement, setErrorMessageComplement] = useState<'repositório'|'usuário'>('repositório')

   function hidePopup(){
      props.setDisplay(false)
   }

   useEffect(()=>{
      if(err === 'repoNotFound'){
         setErrorMessageComplement('repositório')
      }else{
         setErrorMessageComplement('usuário')
      }
   }, [])

   return (
      <section className={stylesBackground}>
         <div className={stylesContainer}>
            <IconExclamation className={stylesIcon}/>

            <h2 className={stylesTitle}>Desculpe!</h2>

            <p className={stylesText}>Não foi possível encontrar o {errorMessageComplement} desejado!</p>

            <button className={stylesButton} onClick={hidePopup} type="button">Certo</button>
         </div>
      </section>
   )
}