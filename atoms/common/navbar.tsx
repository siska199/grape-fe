import { dropdownMenuNavbar, menus } from '@lib/data'
import { motion } from 'framer-motion'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/router'
import { useState } from 'react'
import Dropdown from './Dropdown'
import Search from './search'

const Navbar = () => {
    const {data:session, status} = useSession()
    const router = useRouter()
    const [expandSearch,setExpandSearch] = useState(false)
    const [toggleDropdown,setToggleDropdown] = useState(false)
    const handlerMenus :any = {
      search  : ()=>setExpandSearch(true),
      setting : ()=>console.log("setting"),
      notification : ()=>console.log("notifications"),
      profile : ()=>setToggleDropdown(!toggleDropdown)
    }
    console.log(expandSearch)
  return (
    <nav className='sticky top-0 text-white bg-cd900  h-[4rem] px-2 md:px-4 max-w-[1500px] m-auto'>
      <div className=' flex justify-between items-center h-full  px-[1rem] md:px-[4rem] mx-auto'>
        <h1 onClick={()=>router.push("/")} className='text-[1rem] md:text-[1.5rem] cursor-pointer font-bold'>Grape 🍇</h1>

        <ul className='flex relative text-[1.5rem] items-center gap-2 md:gap-3 '>
          {
            menus.map((menu,i)=>{
              return menu.name=="search"?(
                <div key={i} className='flex'>
                  <Search expand={expandSearch} setExpand={setExpandSearch}/>
                  <motion.li whileTap={{scale:0.9}} onClick={handlerMenus[menu.name]} className={`cursor-pointer ${expandSearch&&"hidden"}`}>{menu.elm({})}</motion.li>
                </div>
              ):(
                <motion.li whileTap={{scale:0.9}}  key={i} onClick={handlerMenus[menu.name]} className='cursor-pointer'>{menu.elm({src:menu.name=="profile"?session?.user?.image as string:""})}</motion.li>
              )
            }
            )
          }
          {
            toggleDropdown && (
              <Dropdown menu={dropdownMenuNavbar}/>
            )
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar