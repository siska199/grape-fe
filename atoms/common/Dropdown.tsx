import React from 'react'
import { motion } from 'framer-motion'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/router'

type Props = {
    menu : {
        name : string
    }[]
}

const Dropdown = (props: Props) => {
    const router = useRouter()
    const {menu} = props
    const handleClickMenu = (data)=>{
        data.name.toLowerCase()=="logout" ? signOut({callbackUrl:"/auth"}) : router.push(data.url)
    }
  return (
    <section className='absolute rounded-md w-[8rem] bg-cd700 z-[99] bottom-[-8.7rem] right-[-0.8rem] text-sm'>
        <div className='w-[1.5rem] h-[1.5rem] rotate-45 bg-cd700 border absolute top-[-0.5rem]  right-[1rem]'></div>
        <ul className='py-2 relative'>
            {
                menu.map((data,i)=>(
                    <motion.li whileTap={{scale:0.95}} onClick={()=>handleClickMenu(data)}  className='p-2 hover:bg-cd600 cursor-pointer' key={i}>
                        {data.name}
                    </motion.li>
                ))
            }
        </ul>
    </section>
  )
}

export default Dropdown