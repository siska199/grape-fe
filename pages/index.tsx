import type { NextPage } from 'next'
import Page from '../layouts/Page'
import {useSession} from "next-auth/react"
import {AiOutlinePlus} from "react-icons/ai"
import {useRouter} from "next/router"

const Home: NextPage = () => {
  const {data:session} = useSession()
  const router = useRouter()
  const handleCreateResume = ()=>{
    router.push("/form-resume")
  }

    return (
    <Page title={"home | grape"}>
      <section className='border-l border-r flex flex-col flex-[0.6] mx-auto '>
        <img src={"/assets/thumbnail.webp"} className="w-full h-[12rem] object-cover" alt="" />
        <div className='m-4 -mt-6 flex gap-8 items-center'>
          <img src={session?.user?.image as string} className="rounded-full"/>
          <h1 className='font-bold text-[1.5rem]'>{session?.user?.name}</h1>
          <p>{session?.user?.username}</p>
        </div>

        <div className='mx-auto mt-4 w-full px-4'>
          <button onClick={()=>handleCreateResume()} className='font-thin border mx-auto w-full px-[3rem] py-2 flex items-center justify-center gap-2 border-dotted'>Create Resume <AiOutlinePlus/></button>
        </div>
      </section>
    </Page>
  )
}

export default Home
