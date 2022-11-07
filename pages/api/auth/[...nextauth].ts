import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import prisma from "../../../lib/prisma/prismadb"

export const authOptions = {
    //Configure one or more authentication providers
    providers : [
        GoogleProvider({
            clientId : process.env.GOOGLE_CLIENT_ID as string,
            clientSecret : process.env.GOOGLE_CLIENT_SECRET as string
        })
    ],
    //Configure prisma adapter
    adapter : PrismaAdapter(prisma),
    //Configure nextauth secret:
    secret : process.env.NEXTAUTH_SECRET ,
    session: { strategy: "jwt" as const }, //this is important to add while you use getToken in middleware
    //Configure sign in and sign out page:
    pages : {
        signIn : "/auth",
        signOut : "/auth"
    }, 
    //Configures callbacks 
    callbacks : {
        async session ({session,token,user}:any){
            return session
        },
        async jwt({token, account}:any){
            return token
        }
    },
    //Cofigure debug
    debug : true
}

export default NextAuth(authOptions)