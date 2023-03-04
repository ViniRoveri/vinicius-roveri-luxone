import Head from "next/head"

type Props = {
   title: string
}

export default function DefaultHead(props: Props){
   return(
      <Head>
         <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
         <link rel="icon" href="/img/icon.svg" type="image/x-icon"/>
         <title>{props.title}</title>
      </Head>
   )
}