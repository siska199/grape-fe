import React from 'react'
import Button from '../atoms/Button'
import Input from '../atoms/Input'
import TextArea from '../atoms/TextArea'
import UploadPhoto from '../atoms/UploadPhoto'
import { useAppSelector } from '../lib/redux/store'
import ListSocialMedia from './ListSocialMedia'

type Props = {}

const FormPersonalInfo = (props : Props) => {
  const form = useAppSelector(state=>state.resume.formPersonalInfo) 

  const handleOnChange = (e : React.SyntheticEvent)=>{
    e.preventDefault()

  }

  return (
    <div className='w-full flex flex-wrap gap-4'>
        <Input name={"fullname"} value={""} />
        <UploadPhoto name={"Profile Picture Resume"} value={""} />
        <div className='grid gap-5 grid-cols-2 w-full'>
            <Input name={"phone"} value={""} />
            <Input name={"email"} value={""} />
        </div>
        <TextArea name={"about me"} value={""} />
        <ListSocialMedia/>
    </div>
  )
}

export default FormPersonalInfo