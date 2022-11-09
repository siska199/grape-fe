import React from 'react'
import Button from '../atoms/Button'
import Input from '../atoms/Input'
import {AiOutlineCloseCircle} from "react-icons/ai"

type Props = {}

const AddSocialMedia = (props: Props) => {

    
  return (
   <div className='flex gap-5 items-center relative font-thin border border-dashed p-2 mt-3'>
        <Input name={"name"} value={""} customeStyle={"w-[40%]"}/>
        <Input name={"link"} value={""} customeStyle={"w-full"}/>   
        <Button customeStyle={"bg-cd700 mt-auto h-[2.2rem]"} label={"Add"} onClick={()=>console.log("")}/>  
        <AiOutlineCloseCircle className='-top-2 absolute -right-2 font-thin cursor-pointer'/>
   </div>
  )
}

export default AddSocialMedia