import React, { useState } from 'react'
import Modal from '../layouts/Modal'
import Button from './Button'
import Input from './Input'
import UploadPhoto from './UploadPhoto'
import { useAppDispatch } from '../lib/redux/store'
import { handleModalAddEducation } from '../lib/redux/features/resumeSlice'
import ListActivity from '../components/ListActivity'

type Props = {}

const AddEducation = (props: Props) => {
    const dispatch = useAppDispatch()

  return (
    <Modal label="Add Education" onClose={()=>dispatch(handleModalAddEducation(false))}>
            <>
                <Input name={"institution"} value={""} />
                <Input name={"major"} value={""} />
                <UploadPhoto name={"logo"} value={""}/>
                <ListActivity/>
                <Button label={"Save"} customeStyle={"ml-auto bg-sky-800"} onClick={()=>console.log("")}/>
            </>
    </Modal>
  )
}

export default AddEducation