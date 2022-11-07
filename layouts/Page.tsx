import React from 'react'
import Head from "next/head"

type Props = {
    children : React.ReactNode;
    title : string
}

const Page : React.FC<Props> = ({children, title}) => {
  return (
    <div>
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <article className='container'>
            {children}
        </article>
    </div>
  )
}

export default Page