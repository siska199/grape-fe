import React from 'react'
import Head from "next/head"
import {useRouter} from "next/router"
import Navbar from '../atoms/Navbar';

type Props = {
    children : React.ReactNode;
    title : string
}

const Page : React.FC<Props> = ({children, title}) => {
  const router = useRouter()
  const currentPath = router.pathname
  return (
    <div>
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        {
          currentPath !=="/auth"?(
            <Navbar/>
          ):null
        }
        <article className='container flex overflow-x-hidden'>
            {children}
        </article>
    </div>
  )
}

export default Page