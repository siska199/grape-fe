import React from 'react'
import Modal from '@layouts/Modal'
import { handleModalAddProject } from '@lib/redux/features/resumeSlice'
import { useAppDispatch } from '@lib/redux/store'
import Input from '@atoms/input/input'
import UploadPhoto from '@atoms/input/upload-photo'
import TextArea from '@atoms/input/text-area'

const AddProject = (props: undefined) => {
    const disptach = useAppDispatch()
  return (
    <Modal title={"Add project"} onClose={()=>disptach(handleModalAddProject(false))} onSave={()=>console.log("save")} >
        <>
            <Input name={"title"} value={""}/>
            <UploadPhoto name={"Image"} value={""}/>
            <TextArea name={"About"} value={""}/>
            <Input name={"Link Repository"} value={""}/>
            <Input name={"Link Project"} value={""}/>
        </>
    </Modal>
  )
}

export default AddProject