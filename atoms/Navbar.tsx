import React,{useState} from 'react'
import {useSession} from "next-auth/react"
import { menus } from '../lib/data'
import { useRouter } from 'next/router'
import Search from './Search'

type Props = {}

const Navbar = (props: Props) => {
    const {data:session, status} = useSession()
    const router = useRouter()
    const [expandSearch,setExpandSearch] = useState(false)
    const handlerMenus :any = {
      search  : ()=>setExpandSearch(true),
      setting : ()=>console.log("setting"),
      notification : ()=>console.log("notifications"),
      profile : ()=>console.log("profile")
    }
    console.log(expandSearch)
  return (
    <nav className='sticky top-0 text-white bg-cd900 h-[4rem] p-4 max-w-[1500px] m-auto'>
      <div className=' flex justify-between items-center px-[1rem] md:px-[4rem] mx-auto'>
        <h1 onClick={()=>router.push("/")} className='text-[1.5rem] cursor-pointer font-bold'>Grape 🍇</h1>

        <ul className='flex text-[1.5rem] items-center gap-3'>
          {
            menus.map(menu=>{
              return menu.name=="search"?(
                <div className='flex'>
                  <Search expand={expandSearch} setExpand={setExpandSearch}/>
                  <li onClick={handlerMenus[menu.name]} className={`cursor-pointer ${expandSearch&&"hidden"}`}>{menu.elm({})}</li>
                </div>
              ):(
                <li onClick={handlerMenus[menu.name]} className='cursor-pointer'>{menu.elm({src:menu.name=="profile"?session?.user?.image as string:""})}</li>
              )
            }
            )
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar