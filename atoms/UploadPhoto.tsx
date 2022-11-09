import React, {useRef, useState} from 'react'
import { InputProps } from '../lib/typescript'
import {FcAddImage} from "react-icons/fc"
import Button from './Button'

const UploadPhoto = ({name, value,}: InputProps) => {
  const uploadRef = useRef<HTMLInputElement | null>(null)
  const [image, setImage] = useState<File | null>(null)
  
  const handleUploadPhoto = ()=>{
    uploadRef?.current?.click()
  }
  return (
    <div className={`w-full flex flex-col`}>
      <label className='label' htmlFor="">{name.toUpperCase()}</label>
      <div className='input border-dashed border flex justify-between items-center'>
        <div className='flex items-center gap-4'>
          <FcAddImage className='text-[4rem]'/>
          <p>Upload a profile picture resume. Max size 2MB</p>
        </div>
        <Button customeStyle={"bg-cd700"} label={"Browse"} onClick={()=>console.log("test")}/>
      </div>
      <input ref={uploadRef} hidden type="file" accept="image/*"/>
    </div>
  )
}

export default UploadPhoto