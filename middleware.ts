import { getToken } from "next-auth/jwt"
import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

export async function middleware (req : NextRequest){
    try {
        if (new RegExp(/^.*(fonts|_next|vk.com|favicon|css).*$/).test(req.url)) {
            return NextResponse.next()
        }
        const {pathname:currentPage} = req.nextUrl
        const authPages = [
            "/",
            "/form-resume",
            "/profile",
            "/myresume"
        ]
        const url = req.nextUrl.clone()
        const inAuthPage = authPages.filter(authPage=>authPage==currentPage)[0]
        console.log("inAuthPage", inAuthPage)
        if(inAuthPage) {
            const session = await getToken({
                req, 
                secret : process.env.NEXTAUTH_SECRET,
                secureCookie: process.env.NODE_ENV == "production",
            })
            console.log("sessio midleware: ", session)
            url.pathname= "/auth"
            if(!session) return NextResponse.redirect(url)
        }
    } catch (error:any) {
        throw new Error(error)
    }

}