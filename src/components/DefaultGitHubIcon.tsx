import IconGitHub from '@/assets/icons/IconGitHub.svg'

const stylesIcon = `absolute fill-default-black h-[170px] left-[50%] -translate-x-[50%] top-[138px] w-[170px]
dark:fill-default-lightGray`

export default function DefaultGitHubIcon(){
   return (
      <IconGitHub className={stylesIcon}/>
   )
}