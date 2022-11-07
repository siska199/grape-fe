import {NextPage} from "next"
import {signIn,signOut, useSession} from "next-auth/react"
import Page from "../layouts/Page"
import {FcGoogle} from "react-icons/fc"

type Props = {}

const auth : NextPage = (props: Props) => {
    const {data:session} = useSession()
    console.log("data: ", session)
  return (
    <Page title={"auth | grape"}>
      <section className="flex w-full p-4">
        <div className="m-auto flex flex-col gap-2 justify-center items-center">
          <h1 className="text-center font-thin text-[1.3rem] ">"Generate Your Web Resume With GRAPE 🍇"</h1>
          {
            session?(
              <button onClick={()=>signOut()}>LogOut</button>
              ):(
              <button className="border rounded-md bg-cd700 w-[10rem] h-10 font-bold text-sm flex justify-center items-center gap-2" onClick={()=>signIn("google",{
                callbackUrl:"/"
              })}>Login With <FcGoogle/></button>
            )
          }
        </div>
      </section>
    </Page>
  )
}

export default auth

