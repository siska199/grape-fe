import Input from '@atoms/input/input'
import InputPhone from '@atoms/input/phone'
import TextArea from '@atoms/input/text-area'
import UploadPhoto from '@atoms/input/upload-photo'
import ListSocialMedia from '@components/list/social-media'
import { useAppSelector } from '@lib/redux/store'
import useOnChange from 'hooks/useOnChange'

const FormPersonalInfo = (props : {}) => {
  const form = useAppSelector(state=>state.resume.form.personalInfo) 
  const  { handleOnChange, handleOnChangeImage,handleOnChangePhone,handleRemoveImage} = useOnChange("personalInfo")

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