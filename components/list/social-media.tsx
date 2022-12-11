import Label from '@atoms/common/lebel-with-button'
import AddSocialMedia from '@atoms/form-add-data/social-media'
import { handleDeleteListData, handleEditListData, handleResetFormData, } from '@lib/redux/features/resumeSlice'
import { useAppDispatch } from '@lib/redux/store'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai"
type TProps = {
    socialMedias : TSocialMedia[] | []
}

const ListSocialMedia = (props: TProps) => {
    const dispatch = useAppDispatch()
    const iconStyle= ' rounded-full w-[1.5rem] h-[1.5rem] p-1 flex justify-center items-center'
    const [onChange, setOnChange] = useState<null | "edit"|"add">(null)
    const {socialMedias} = props

    const handleEditData = (id:string)=>{
        setOnChange("edit")
        dispatch(handleEditListData({
            type : "socialMedia",
            parentName:"personalInfo",
            id 
        }))
    }

    const handleDeleteData = (id:string)=>{
        dispatch(handleDeleteListData({
            type : "socialMedia",
            parentName:"personalInfo",
            id 
        }))
    }
    const handleAddData = ()=>{
        setOnChange("add")
        dispatch(
            handleResetFormData({
                type : "socialMedia",
                parentName:"personalInfo",
            })
        )
    }

  return (
    <div className='w-full'>
        <Label name="list social media"  onAdd={()=>handleAddData()}/>
        <ul className='mb-3 flex flex-col gap-2'>
            {
                socialMedias.map((data:TSocialMedia,i:number)=>(
                    <li className='font-thin flex justify-between border-b-[0.005rem] pb-2' key={i}>
                        <a className='flex gap-2 items-center hover:underline' href={data.link} target={"_black"}>🍬 {data.name} </a>
                        <div className='flex gap-2'>
                            <motion.span onClick={()=>handleEditData(data.id)}  className={`${iconStyle} bg-green-600 hover:bg-green-500`} whileTap={{scale:0.9}}>
                                <AiOutlineEdit  className="cursor-pointer"/>
                            </motion.span>
                            <motion.span onClick={()=>handleDeleteData(data.id)} className={`${iconStyle} bg-red-600 hover:bg-red-500`} whileTap={{scale:0.9}}>
                                <AiOutlineDelete  className="cursor-pointer"/>
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