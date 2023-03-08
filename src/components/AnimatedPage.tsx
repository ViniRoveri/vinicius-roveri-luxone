import {AnimatePresence, motion} from 'framer-motion'
import { useRouter } from 'next/router'

type Props = {
   children: JSX.Element
}

const stylesContainer = `relative`

export default function AnimatedPage(props:Props){
   const router = useRouter()

   const animations = {
      initial: {
         clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
      },
      animate: {
         clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      },
      exit: {
         clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
      }
   }

   const transition = {
      duration: 0.35,
      ease: 'easeOut'
   }

   return (
      <AnimatePresence initial={false} mode='wait'>
         <motion.div className={stylesContainer} variants={animations} initial='initial' animate='animate' exit='exit' key={router.route} transition={transition}>
            {props.children}
         </motion.div>
      </AnimatePresence>
   )
}