import AddSocialMedia from '@atoms/form-add-data/social-media'
import { useState } from 'react'
import { AiOutlineEdit,AiOutlineDelete } from "react-icons/ai"
import { BsPlusSquare } from "react-icons/bs"
import { motion } from 'framer-motion'
import { useAppDispatch } from '@lib/redux/store'
import { handleEditListData } from '@lib/redux/features/resumeSlice'
type TProps = {
    socialMedias : TSocialMedia[] | []
}

const ListSocialMedia = (props: TProps) => {
    const dispatch = useAppDispatch()
    const iconStyle= ' rounded-full w-[1.5rem] h-[1.5rem] p-1 flex justify-center items-center'
    const [onChange, setOnChange] = useState<null | "edit"|"add">(null)
    const {socialMedias} = props

    const handleEditData = (id)=>{
        setOnChange("edit")
        dispatch(handleEditListData({
            type : "socialMedia",
            parentName:"personalInfo",
            id 
        }))
    }

    const handleDeleteData = ()=>{
    }

  return (
    <div className='w-full'>
        <label htmlFor="" className='label flex gap-3 items-center'>LIST SOCIAL MEDIA <BsPlusSquare onClick={()=>setOnChange("add")} className='cursor-pointer'/> </label>
        <ul className='mb-3 flex flex-col gap-2'>
            {
                socialMedias.map((data:TSocialMedia,i:number)=>(
                    <li onClick={()=>handleEditData(data.id)} className='font-thin flex justify-between border-b-[0.005rem] pb-2' key={i}>
                        <a className='flex gap-2 items-center hover:underline' href={data.link} target={"_black"}>🍬 {data.name} </a>
                        <div className='flex gap-2'>
                            <motion.span className={`${iconStyle} bg-green-600 hover:bg-green-500`} whileTap={{scale:0.9}}>
                                <AiOutlineEdit  onClick={handleEditData} className="cursor-pointer"/>
                            </motion.span>
                            <motion.span className={`${iconStyle} bg-red-600 hover:bg-red-500`} whileTap={{scale:0.9}}>
                                <AiOutlineDelete  onClick={handleDeleteData} className="cursor-pointer"/>
                            </motion.span>
                        </div>
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