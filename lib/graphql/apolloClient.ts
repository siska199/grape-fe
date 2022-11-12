import { ApolloClient, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
    uri : process.env.NEXT_PUBLIC_BE_BASEURL,
    cache : new InMemoryCache() ,
    credentials: "include"
})

export default client