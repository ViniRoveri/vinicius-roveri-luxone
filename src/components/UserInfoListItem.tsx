type Props = {
   Icon: any
   text: string
}

const stylesContainer = `flex items-center justify-center`
const stylesIcon = `fill-default-black h-6 mr-2.5 w-6`
const stylesText = `font-light font-rubik text-[20px] text-default-gray
dark:text-default-darkGray`

export default function UserInfoListItem({Icon, text}: Props){
   return (
      <div className={stylesContainer}>
         <Icon className={stylesIcon}/>

         <p className={stylesText}>{text}</p>
      </div>
   )
}