import Button from '@atoms/common/button'
import { TInputProps } from '@lib/typescript/type-props'
import { useRef } from 'react'
import { FcAddImage } from "react-icons/fc"
import { IoMdCloseCircle } from "react-icons/io";

type Tprops = Omit<TInputProps<HTMLInputElement>,"type" | "value"> &{
  value : {
    file: File | null;
    url : string | ArrayBuffer | null;
    imageName : string
  }
  onRemove : ()=>void
}

const UploadPhoto = (props: Tprops) => {
  const {name, value : {url, imageName}, onChange, onRemove} = props
  const uploadRef = useRef<HTMLInputElement | null>(null)
  const handleUploadPhoto = ()=>{
    uploadRef?.current?.click()
  }


  return (
    <div className={`w-full flex flex-col`}>
      <label className='label' htmlFor="">{name.toUpperCase()}</label>
      <div className='input border-dashed border flex justify-between items-center py-3'>
        <div className='flex items-center gap-4'>
          {
            url ? (
              <div className='relative'>
                <img src={url as string} className="w-[4rem] h-[4rem] cursor-zoom-in"/>
                <IoMdCloseCircle onClick={onRemove} className='absolute -top-[0.6rem] -right-[0.6rem] border-1 rounded-full cursor-pointer border-cd400'/>
              </div>
            ):(
              <FcAddImage className='text-[4rem]'/>
            )
          }
          <div>
            <p>Upload a profile picture resume. Max size 2MB</p>
            <p className='text-[0.75rem] font-thin text-cd400'>{imageName}</p>
          </div>
        </div>
        <Button customeStyle={"bg-cd700"} name={"Browse"} onClick={handleUploadPhoto}/>
      </div>
      <input  name={"image"} onChange={onChange} ref={uploadRef} hidden type="file" accept="image/*"/>
    </div>
  )
}

export default UploadPhoto