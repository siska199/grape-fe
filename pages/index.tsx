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
      <article className='flex flex-col flex-1 mx-auto '>
        <img src={"/assets/thumbnail.webp"} className="w-full h-[15rem] object-cover" alt="" />

        <section className='border-b flex gap-6 flex-wrap h-[10rem] justify-between px-[1rem] md:mx-[4rem] py-[1.2rem]'>
          <div className='flex relative'>
            <img src={session?.user?.image as string} className="rounded-full -top-[4rem] absolute  w-[8rem] border-pink-600 border-4 h-[8rem]"/>
            <div className='ml-[10rem]'>
              <h1 className='font-bold text-[1.5rem] tracking-wide'>{session?.user?.name}</h1>
              <p className='font-thin'>i'm a frontend engineer</p>
            </div>
          </div>
          <div className='text-sm flex gap-4'>
            <button className='px-4 py-1 border border-cd700 h-[2rem] w-[9rem]'>View portofolio</button>
            <button className='flex justify-center items-center gap-3 py-1 bg-cd800 w-[9rem] h-[2rem] px-4'><AiOutlinePlus/> <span>Follow</span></button>
          </div>
        </section>

        <section>

        </section>
      </article>
    </Page>
  )
}

export default Home
