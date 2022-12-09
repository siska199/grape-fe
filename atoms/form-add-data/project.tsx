import Input from '@atoms/input/input'
import TextArea from '@atoms/input/text-area'
import UploadPhoto from '@atoms/input/upload-photo'
import Modal from '@layouts/modal'
import { handleModalAddProject } from '@lib/redux/features/resumeSlice'
import { useAppDispatch } from '@lib/redux/store'
import React, { useState } from 'react'

const AddProject = (props: {}) => {
    const [isApp, setIsApp] = useState<boolean>(true)
    const disptach = useAppDispatch()
    const handleOnChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{

    }

  return (
    <Modal title={"Add project"} onClose={()=>disptach(handleModalAddProject(false))} onSave={()=>console.log("save")} >
        <>
            <Input onChange={handleOnChange} type="text" name={"title"} value={""}/>
            <UploadPhoto onChange={handleOnChange}  name={"image"} value={""}/>
            <TextArea onChange={handleOnChange}  name={"about"} value={""}/>
            {
              isApp && (
                <>
                  <Input onChange={handleOnChange} type="text" name={"link repository"} value={""}/>
                  <Input onChange={handleOnChange} type="text" name={"link project"} value={""}/>
                </>
              )
            }
        </>
    </Modal>
  )
}

export default AddProject