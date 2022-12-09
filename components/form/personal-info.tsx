import Input from '@atoms/input/input'
import TextArea from '@atoms/input/text-area'
import UploadPhoto from '@atoms/input/upload-photo'
import ListSocialMedia from '@components/list/social-media'
import { useAppSelector } from '@lib/redux/store'
import React, { useState } from 'react'


const FormPersonalInfo = (props : {}) => {
  const form = useAppSelector(state=>state.resume.formPersonalInfo) 
  const [file, setFile] = useState<File | null>(null)

  const handleOnChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    e.preventDefault()

  }

  return (
    <div className='container-form'>
        <Input onChange={handleOnChange} type="text"  name={"fullname"} value={form.fullname} />
        <UploadPhoto onChange={handleOnChange}  name={"profile picture resume"} value={form.image} />
        <div className='grid gap-5 grid-cols-2 w-full'>
            <Input onChange={handleOnChange} type="text" name={"phone"} value={form.phone} />
            <Input onChange={handleOnChange} type="text" name={"email"} value={form.email} />
        </div>
        <TextArea onChange={handleOnChange} name={"about me"} value={form.aboutMe} />
        <ListSocialMedia socialMedias={form.socialMedias}/>
    </div>
  )
}

export default FormPersonalInfo