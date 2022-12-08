import Button from '@atoms/common/button'
import { useRef, useState } from 'react'
import { FcAddImage } from "react-icons/fc"
import { TInputProps } from '@lib/typescript/type-props'

type Tprops = Omit<TInputProps,"type">

const UploadPhoto = (props: Tprops) => {
  const {name, value, onChange} = props
  const uploadRef = useRef<HTMLInputElement | null>(null)
  
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
        <Button customeStyle={"bg-cd700"} name={"Browse"} onClick={handleUploadPhoto}/>
      </div>
      <input value={value} onChange={onChange} ref={uploadRef} hidden type="file" accept="image/*"/>
    </div>
  )
}

export default UploadPhoto