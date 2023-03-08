import { Dispatch, SetStateAction } from "react"

type Props = {
   numberToDisplay: number
   setNumberToDisplay: Dispatch<SetStateAction<number>>
}

const stylesButton = `border-2 font-rubik mt-20 px-7 py-0.5 rounded-[10px] text-[24px] text-center`

export default function SeeMoreButton(props: Props){
   function handleClick(){
      props.setNumberToDisplay(props.numberToDisplay + 4)
   }

   return (
      <button className={stylesButton} onClick={handleClick} type="button">
         Ver mais
      </button>
   )
}