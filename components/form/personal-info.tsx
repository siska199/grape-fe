import Input from '@atoms/input/input'
import TextArea from '@atoms/input/text-area'
import UploadPhoto from '@atoms/input/upload-photo'
import ListSocialMedia from '@components/list/social-media'
import { handleChangeField } from '@lib/redux/features/resumeSlice'
import { useAppDispatch, useAppSelector } from '@lib/redux/store'
import React, { useState } from 'react'


const FormPersonalInfo = (props : {}) => {
  const dispatch = useAppDispatch()
  const form = useAppSelector(state=>state.resume.form.personalInfo) 
  const [file, setFile] = useState<File | null>(null)

  const handleOnChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    e.preventDefault()
    const data = {
      type : "personalInfo",
      value : e.target.value,
      name : e.target.name
    }
    dispatch(handleChangeField(data))
  }

  return (
    <div className='container-form'>
        <Input onChange={handleOnChange} type="text"  name={"fullname"} value={form.fullname} />
        <UploadPhoto onChange={handleOnChange}  name={"profile picture resume"} value={form.image} />
        <div className='grid gap-5 grid-cols-2 w-full'>
            <Input onChange={handleOnChange} type="number" name={"phone"} value={form.phone} />
            <Input onChange={handleOnChange} type="email" name={"email"} value={form.email} />
        </div>
        <TextArea onChange={handleOnChange} name={"about me"} value={form.aboutMe} />
        <ListSocialMedia socialMedias={form.socialMedias}/>
    </div>
  )
}

export default FormPersonalInfo