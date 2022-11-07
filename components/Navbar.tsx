import React from 'react'
import {useSession} from "next-auth/react"
import {AiOutlineLogout} from "react-icons/ai"
import {signOut} from "next-auth/react"
type Props = {}

const Navbar = (props: Props) => {
    const {data:session, status} = useSession()
    console.log(session?.user?.image)
    if(status=="loading") return <div>Loading...</div>
  return (
    <nav className='sticky top-0 text-white bg-cd900 h-[4rem] p-4 flex justify-between items-center max-w-[1500px] m-auto'>
        <h1 className='text-[1.5rem] font-bold'>Grape 🍇</h1>
        <ul>
            <AiOutlineLogout className='text-[2rem] cursor-pointer' onClick={()=>signOut()}/>
        </ul>
    </nav>
  )
}

export default Navbar