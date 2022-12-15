import Button from '@atoms/common/button'
import Input from '@atoms/input/input'
import AddField from '@layouts/add-field'
import { useAppSelector } from '@lib/redux/store'
import useOnChange from 'hooks/useOnChange'
import useOnCRUD from 'hooks/useOnCRUD'
import React from 'react'

type TProps = {
  onClose : React.Dispatch<React.SetStateAction<boolean>>
}

const AddSocialMedia = (props: TProps) => {
  const {onClose}= props
  const form = useAppSelector(state=>state.resume.form.socialMedia)
  const {handleOnChange} = useOnChange("socialMedia")
  const {handleAddData, handleResetForm} = useOnCRUD({
    parentName : "personalInfo",
    type : "socialMedia",
  })


  return (
    <AddField onClose={()=>{
      onClose(false)
      handleResetForm()
    }}>
          <Input onChange={handleOnChange} type="text" name={"name"} value={form.name} customeStyle={"w-[40%]"}/>
          <Input onChange={handleOnChange} type="text" name={"link"} value={form.link} customeStyle={"w-[40%]"}/>   
          <Button customeStyle={"bg-cd700 mt-auto h-[2.2rem]"} name={"add"} onClick={()=>handleAddData()}/>  
    </AddField>

  )
}

export default AddSocialMedia