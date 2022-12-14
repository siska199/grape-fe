import Navbar from '@atoms/common/navbar';
import Head from "next/head";
import { useRouter } from "next/router";
import React from 'react';

type TProps = {
    children : React.ReactNode;
    title : string
}

const Page : React.FC<TProps> = ({children, title}) => {
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
        <div className='container flex overflow-x-hidden'>
            {children}
        </div>
    </div>
  )
}

export default Page