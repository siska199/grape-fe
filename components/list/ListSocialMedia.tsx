import React, {useState} from 'react'
import {BsPlusSquare} from "react-icons/bs"
import {AiOutlineEdit} from "react-icons/ai"
import AddSocialMedia from '../atoms/AddSocialMedia'
type Props = {}

const ListSocialMedia = (props: Props) => {
  const [onChange, setOnChange] = useState<null | "edit"|"add">(null)
  const socialMedias = [
    {
        id : 1,
        name : "github",
        link : "https://github.com/siska199"
    },
    {
        id : 2,
        name : "linkind",
        link : "https://www.linkedin.com/in/siska-apriana-rifianti/"
    }
  ]
  return (
    <div className='w-full'>
        <label htmlFor="" className='label flex gap-3 items-center'>LIST SOCIAL MEDIA <BsPlusSquare onClick={()=>setOnChange("add")} className='cursor-pointer'/> </label>
        <ul>
            {
                socialMedias.map((data,i)=>(
                    <li className='font-thin ' key={i}>
                        <a className='flex gap-2 items-center' href={data.link} target={"_black"}> {data.name} <AiOutlineEdit/></a>
                    </li>
                ))
            }
        </ul>
        {
            onChange && (
                <AddSocialMedia/>
            )
        }
    </div>
  )
}

export default ListSocialMedia