import { NextPage } from "next"
import { signIn, signOut, useSession } from "next-auth/react"
import { FcGoogle } from "react-icons/fc"
import Page from "../layouts/page"
import {motion} from "framer-motion"

type Props = {}

const Auth : NextPage = (props: Props) => {
    const {data:session} = useSession()
    console.log("data: ", session)
  return (
    <Page title={"auth | grape"}>
      <section className="flex w-full p-4">
        <div className="m-auto flex flex-col gap-2 justify-center items-center">
          <h1 className="text-center font-bold text-[2.5rem] ">Login</h1>
          <p className="font-thin w-[30rem] text-center px-4">Welcome! Login to generate your best portofolio and stand up in front of recruiter with GRAPE</p>
          <img src={"assets/agreement.png"}  width={200} height={200} alt="" />
          <motion.button whileTap={{scale:0.95}} className="border rounded-md bg-cd700 w-[10rem] h-10 font-bold text-sm flex justify-center items-center gap-2" onClick={()=>signIn("google",{
            callbackUrl:"/form-resume"
          })}>Login With <FcGoogle/></motion.button>
        </div>
      </section>
    </Page>
  )
}

export default Auth

