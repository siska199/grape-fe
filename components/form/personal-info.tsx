import React,{useState} from 'react'
import Input from '@atoms/input/input'
import TextArea from '@atoms/input/text-area'
import UploadPhoto from '@atoms/input/upload-photo'
import { useAppSelector } from '@lib/redux/store'
import ListSocialMedia from '@components/list/ListSocialMedia'


type Props = {}

const FormPersonalInfo = (props : Props) => {
  const form = useAppSelector(state=>state.resume.formPersonalInfo) 
  const [file, setFile] = useState<File | null>(null)

  const handleOnChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    e.preventDefault()

  }

  return (
    <div className='container-form'>
        <Input onChange={handleOnChange} type="text"  name={"fullname"} value={""} />
        <UploadPhoto onChange={handleOnChange}  name={"profile picture resume"} value={""} />
        <div className='grid gap-5 grid-cols-2 w-full'>
            <Input onChange={handleOnChange} type="text" name={"phone"} value={""} />
            <Input onChange={handleOnChange} type="text" name={"email"} value={""} />
        </div>
        <TextArea onChange={handleOnChange} name={"about me"} value={""} />
        <ListSocialMedia/>
    </div>
  )
}

export default FormPersonalInfo