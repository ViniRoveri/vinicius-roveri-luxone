import '@/styles.css'
import Header from '@/components/Header'
import LocalStorageDarkModeController from '@/components/LocalStorageDarkModeController'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import DarkModeSwitcher from '@/components/DarkModeSwitcher'
import { useEffect } from 'react'
import Router from 'next/router'
import nProgress from 'nprogress'
import AnimatedPage from '@/components/AnimatedPage'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(()=>{
		Router.events.on('routeChangeStart', nProgress.start)
		Router.events.on('routeChangeComplete', nProgress.done)
		Router.events.on('routeChangeError', nProgress.done)
	}, [])
  
  return(
    <RecoilRoot>
      <LocalStorageDarkModeController/>

      <Header/>
      <AnimatedPage>
        <Component {...pageProps} />
      </AnimatedPage>
      <DarkModeSwitcher/>
    </RecoilRoot>
  )
}
