import Input from '@atoms/input/input'
import InputPhone from '@atoms/input/phone'
import TextArea from '@atoms/input/text-area'
import UploadPhoto from '@atoms/input/upload-photo'
import ListSocialMedia from '@components/list/social-media'
import { generateURLImage } from '@lib/helper'
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

  const handleOnChangePhone = (dataInput : TDataInputCustome)=>{
    const data = {
      type : "personalInfo",
      value : dataInput.value,
      name : dataInput.name
    }
    dispatch(handleChangeField(data))
  }

  const handleOnChangeImage = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const target = e.target
    if(target.files){
      //Generate URL :
      const imageName = target.files[0]? target.files[0].name : ""
        const callback =(url:TFileReader)=>{
          const data = {
          type : "personalInfo",
          value : {
            file : null,
            url : url,
            imageName 
          },
            name : target.name
          }
          dispatch(handleChangeField(data))
        }
        generateURLImage(target.files[0], callback)
    }
  }

  const handleRemoveImage = ()=>{
    const data = {
      type : "personalInfo",
      value : {
        file : null,
        url : "",
        imageName : ""
      },
      name : "image"
    }
    dispatch(handleChangeField(data))
  }


  return (
    <div className='container-form'>
        <Input onChange={handleOnChange} type="text"  name={"fullname"} value={form.fullname} />
        <UploadPhoto onRemove={handleRemoveImage} onChange={handleOnChangeImage}  name={"profile picture resume"} value={form.image} />
        <div className='grid gap-5 grid-cols-2 w-full'>
            <InputPhone onChange={handleOnChangePhone}  name={"phone"} value={form.phone}/>
            <Input onChange={handleOnChange} type="email" name={"email"} value={form.email} />
        </div>
        <TextArea onChange={handleOnChange} name={"about me"} value={form.aboutMe} />
        <ListSocialMedia socialMedias={form.socialMedias}/>
    </div>
  )
}

export default FormPersonalInfo