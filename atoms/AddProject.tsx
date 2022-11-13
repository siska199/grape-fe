import React from 'react'
import Modal from '../layouts/Modal'
import { handleModalAddEducation } from '../lib/redux/features/resumeSlice'
import { useAppDispatch } from '../lib/redux/store'

type Props = {}

const AddProject = (props: Props) => {
    const disptach = useAppDispatch()
  return (
    <Modal label={"Add project"} onClose={()=>disptach(handleModalAddEducation(false))}>
        <>
            
        </>
    </Modal>
  )
}

export default AddProject