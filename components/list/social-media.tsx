import AddSocialMedia from '@atoms/form-add-data/social-media'
import { useState } from 'react'
import { AiOutlineEdit } from "react-icons/ai"
import { BsPlusSquare } from "react-icons/bs"

type TProps = {
    socialMedias : TSocialMedia[] | []
}

const ListSocialMedia = (props: TProps) => {
  const [onChange, setOnChange] = useState<null | "edit"|"add">(null)
  const {socialMedias} = props
  console.log(onChange)
  return (
    <div className='w-full'>
        <label htmlFor="" className='label flex gap-3 items-center'>LIST SOCIAL MEDIA <BsPlusSquare onClick={()=>setOnChange("add")} className='cursor-pointer'/> </label>
        <ul className='mb-3'>
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
                <AddSocialMedia onClose={setOnChange}/>
            )
        }
    </div>
  )
}

export default ListSocialMedia