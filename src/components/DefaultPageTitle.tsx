import IconGitHub from '@/assets/icons/IconGitHub.svg'

type Props = {
   titleText: string
}

const stylesTitleContainer = `flex items-center mb-[42px]`
const stylesIcon = `fill-default-black h-[50px] mr-[18px] w-[50px]
dark:fill-default-lightGray`
const stylesTitle = `font-robotoMono text-[35px]`

export default function DefaultPageTitle(props: Props){
   return (
      <div className={stylesTitleContainer}>
         <IconGitHub className={stylesIcon}/>

         <h2 className={stylesTitle}>{props.titleText}</h2>
      </div>
   )
}