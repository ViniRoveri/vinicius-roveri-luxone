import IconGitHub from '@/assets/icons/IconGitHub.svg'

const stylesIcon = `absolute fill-default-black h-[120px] left-[50%] -translate-x-[50%] top-[30px] w-[170px]
dark:fill-default-lightGray
sm:h-[170px] sm:top-[54px]`

export default function DefaultGitHubIcon(){
   return (
      <IconGitHub className={stylesIcon}/>
   )
}