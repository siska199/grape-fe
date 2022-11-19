import React from 'react'
import Modal from '../layouts/Modal'
import { handleModalAddProject } from '../lib/redux/features/resumeSlice'
import { useAppDispatch } from '../lib/redux/store'
import Input from './Input'
import UploadPhoto from './UploadPhoto'
import TextArea from './TextArea'

type Props = {}

const AddProject = (props: Props) => {
    const disptach = useAppDispatch()
  return (
    <Modal label={"Add project"} onClose={()=>disptach(handleModalAddProject(false))} onSave={()=>console.log("save")} >
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