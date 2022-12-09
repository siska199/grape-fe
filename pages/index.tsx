import { motion } from "framer-motion"
import type { NextPage } from 'next'
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { AiOutlinePlus } from "react-icons/ai"
import Page from '../layouts/page'

const Home: NextPage = () => {
  const {data:session} = useSession()
  const router = useRouter()
  const handleCreateResume = ()=>{
    router.push("/form-resume")
  }

    return (
    <Page title={"home | grape"}>
      <article className='flex flex-col flex-1 mx-auto '>
        <img src={"/assets/thumbnail.webp"} className="w-full md:h-[15rem] aspect-[3/1] object-cover" alt="" />

        <section className='border-b flex gap-6 flex-wrap justify-between px-[1rem] md:mx-[4rem] pb-[1.2rem] md:pb-[4rem] pt-[1.2rem]'>
          <div className='flex relative'>
            <img width={128} height={128} src={session?.user?.image as string} className="rounded-full -top-[4rem] absolute w-[8rem] border-pink-600 border-4 h-[8rem]"/>
            <div className='ml-[10rem]'>
              <h1 className='font-bold text-[1.5rem] tracking-wide'>{session?.user?.name}</h1>
              <p className='font-thin'>i'm a frontend engineer</p>
            </div>
          </div>
          <div className='text-sm flex gap-4'>
            <motion.button whileTap={{scale:0.9}} className='px-4 py-1 border border-cd800 hover:bg-cd800 h-[2rem] w-[9rem]'>View portofolio</motion.button>
            <motion.button whileTap={{scale:0.9}} className='flex justify-center items-center gap-3 py-1 bg-cd800 hover:bg-transparent hover:border hover:border-cd800 w-[9rem] h-[2rem] px-4'><AiOutlinePlus/> <span>Follow</span></motion.button>
          </div>
        </section>

        <section>

        </section>
      </article>
    </Page>
  )
}

export default Home
