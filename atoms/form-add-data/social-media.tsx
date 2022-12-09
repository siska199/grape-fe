import Button from '@atoms/common/button'
import Input from '@atoms/input/input'
import AddField from '@layouts/add-field'
import { useAppSelector } from '@lib/redux/store'
import React from 'react'

type TProps = {
  onClose : React.Dispatch<React.SetStateAction<null | "edit"|"add">>
}

const AddSocialMedia = (props: TProps) => {
  const {onClose}= props
  const form = useAppSelector(state=>state.resume.form.socialMedia)
  const handleOnChange = (e : React.ChangeEvent<HTMLInputElement>)=>{
    
  }
  return (
    <AddField onClose={()=>onClose(null)}>
          <Input onChange={handleOnChange} type="text" name={"name"} value={form.name} customeStyle={"w-[40%]"}/>
          <Input onChange={handleOnChange} type="text" name={"link"} value={form.link} customeStyle={"w-[40%]"}/>   
          <Button customeStyle={"bg-cd700 mt-auto h-[2.2rem]"} name={"add"} onClick={()=>console.log("")}/>  
    </AddField>

  )
}

export default AddSocialMedia