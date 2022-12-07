import {getToken} from "next-auth/jwt"
export { withAuth } from "next-auth/middleware"

import { NextResponse, NextRequest } from "next/server";
const secret = process.env.NEXTAUTH_SECRET
export async function middleware(req:NextRequest){
    try {
        //Prevent redirect url while load some file that isnot a page
        if (new RegExp(/^.*(fonts|_next|vk.com|favicon).*$/).test(req.url)) return NextResponse.next()
        //Global constanta
        const url = req.nextUrl.clone()
        const session = await getToken({
            req,
            secret
        })
        //Constanta for detect auth page
        const {pathname:currentPage} = req.nextUrl
        const authPages = [
            "/",
            "/form-resume"
        ]
        const isAuthPage = authPages.includes(currentPage)
        if(isAuthPage){
            url.pathname = "/auth"
            if(!session) return NextResponse.redirect(url)
        }
        if(currentPage=="/auth"){
            url.pathname = "/"
            if(session) return NextResponse.redirect(url)
        }
    } catch (error) {
        throw error
    }

}




// export const config = { matcher: ["/","/profile","/form-auth"] }