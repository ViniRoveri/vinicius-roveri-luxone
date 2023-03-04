import { Html, Head, Main, NextScript } from 'next/document'

const stylesBody = `bg-default-white
dark:bg-default-black`

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={stylesBody}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
