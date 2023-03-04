import '@/styles.css'
import Header from '@/components/Header'
import LocalStorageDarkModeController from '@/components/LocalStorageDarkModeController'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import DarkModeSwitcher from '@/components/DarkModeSwitcher'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <RecoilRoot>
      <LocalStorageDarkModeController/>

      <Header/>
      <Component {...pageProps} />
      <DarkModeSwitcher/>
    </RecoilRoot>
  )
}
