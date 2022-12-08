import { ApolloProvider } from '@apollo/client'
import { AnimatePresence, motion } from "framer-motion"
import { SessionProvider } from "next-auth/react"
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { Provider } from 'react-redux'
import client from '../lib/graphql/apolloClient'
import store from '../lib/redux/store'
import '../styles/globals.css'

const variants = {
  initialState : {
    opacity : 0,
    clipPath:  "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
  },
  animateState : {
    opacity : 1,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
  },
  exitState : {
    clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)"
  }
}

function MyApp({ Component, pageProps : {session, ...pageProps} }: AppProps) {
  const router = useRouter()
  return(
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
        <Provider store={store}>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={router.route}
              initial="initialState"
              animate="animateState"
              exit="exitState"
              transition={{duration:0.75}}
              variants={variants}
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </Provider>      
      </SessionProvider>
    </ApolloProvider>
  )
  
}

export default MyApp
