import Button from '@atoms/common/button'
import Input from '@atoms/input/input'
import AddField from '@layouts/add-field'
import { handleAddListDataForm, handleChangeField, handleResetFormData } from '@lib/redux/features/resumeSlice'
import { useAppDispatch, useAppSelector } from '@lib/redux/store'
import React from 'react'

type TProps = {
  onClose : React.Dispatch<React.SetStateAction<null | "edit"|"add">>
}

const AddSocialMedia = (props: TProps) => {
  const {onClose}= props
  const dispatch = useAppDispatch()
  const form = useAppSelector(state=>state.resume.form.socialMedia)
  const handleOnChange = (e : React.ChangeEvent<HTMLInputElement>)=>{
    dispatch(handleChangeField({
      type:"socialMedia",
      name : e.target.name,
      value : e.target.value
    }))
  }
  const handleAddData = ()=>{
    dispatch(handleAddListDataForm({
      parentName : "personalInfo",
      type : "socialMedia",
    }))
  }
  const handleOnClose = ()=>{
    onClose(null)
    dispatch(handleResetFormData({
      type : "socialMedia",
      parentName:"personalInfo"
    }))
  }
  return (
    <AddField onClose={()=>handleOnClose()}>
          <Input onChange={handleOnChange} type="text" name={"name"} value={form.name} customeStyle={"w-[40%]"}/>
          <Input onChange={handleOnChange} type="text" name={"link"} value={form.link} customeStyle={"w-[40%]"}/>   
          <Button customeStyle={"bg-cd700 mt-auto h-[2.2rem]"} name={"add"} onClick={()=>handleAddData()}/>  
    </AddField>

  )
}

export default AddSocialMedia