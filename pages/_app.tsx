import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {SessionProvider} from "next-auth/react"
import { ApolloProvider } from '@apollo/client'
import client from '../lib/graphql/apolloClient'
import { Provider } from 'react-redux'
import store from '../lib/redux/store'


function MyApp({ Component, pageProps : {session, ...pageProps} }: AppProps) {
  return(
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>      
      </SessionProvider>
    </ApolloProvider>
  )
  
}

export default MyApp
