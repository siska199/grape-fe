import {NextPage} from "next"
import {signIn, useSession} from "next-auth/react"
import Page from "../layouts/Page"


type Props = {}

const auth : NextPage = (props: Props) => {
    const {data} = useSession()
    console.log("session: ", data)
  return (
    <Page title={"auth | grape"}>
      <section className=" w-full flex ">
          <button className="rounded-md bg-cd800 m-auto w-[10rem] h-10 font-bold text-sm" onClick={()=>signIn("google")}>Login With </button>
      </section>
    </Page>
  )
}

export default auth