import { NextPage } from "next"
import { signIn, signOut, useSession } from "next-auth/react"
import { FcGoogle } from "react-icons/fc"
import Page from "../layouts/page"
import {motion} from "framer-motion"
import Recaptcha from "@atoms/recaptcha"
import Input from "@atoms/input/input"

type Props = {}

const Auth : NextPage = (props: Props) => {
    const {data:session} = useSession()
  return (
    <Page title={"auth | grape"}>
      <section className="flex w-full p-4 border">
        <div className="w-full m-auto flex flex-col gap-4 justify-center items-center">
          <img src={"assets/grape.png"}  width={100} height={100} alt="" />
          <h1 className="text-center font-bold text-[2.5rem] ">Login</h1>
          <p className="font-thin lg:w-[30rem] text-center px-4">Welcome! Login to generate your best portofolio and stand up in front of recruiter with GRAPE</p>
          <form action="" className="w-[19rem] flex flex-col gap-3">
            <Input customeStyle={`h-[3.5rem] mb-3`} name={"Email"} value={""} type={"text"} onChange={()=>console.log("")} />
            <div className="h-[5rem]">
              <Recaptcha/>
            </div>
            <motion.button whileTap={{scale:0.95}} className={`w-[19rem] h-[2.5rem] border  border-cd700 bg-cd700  hover:bg-cd600  font-bold text-sm flex justify-center items-center gap-2`} onClick={()=>signIn("google",{
            callbackUrl:"/form-resume"
            })}> Continue </motion.button>
          </form>
          <div>
            <h1>OR</h1>
          </div>
          <motion.button whileTap={{scale:0.95}} className={`w-[19rem] h-[2.5rem] border  font-bold text-sm flex justify-center items-center gap-2 border-violet-700 bg-violet-700 hover:bg-violet-600`} onClick={()=>signIn("google",{
            callbackUrl:"/form-resume"
          })}>Login With <FcGoogle/></motion.button>
        </div>
      </section>
    </Page>
  )
}

export default Auth

