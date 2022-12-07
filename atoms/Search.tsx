import React from 'react'
import {AiFillCloseCircle} from "react-icons/ai"
type Props = {
  expand : boolean;
  setExpand : React.Dispatch<React.SetStateAction<boolean>>
}

const Search = ({expand, setExpand}: Props) => {
  return (
    <div className={`${expand?"w-[10rem] md:w-[15rem] px-2 border": "h-0 w-0"} text-sm transition-all duration-500 ease-in-out items-center flex rounded-lg bg-cd800 overflow-hidden`}>
      <input type="text" className={`bg-cd800 py-[0.3rem] md:py-[0.5rem] outline-none  md:flex-grow `} placeholder="Search people"/>
      <AiFillCloseCircle onClick={()=>setExpand(false)} className={`cursor-pointer`}/>
    </div>
  )
}

export default Search