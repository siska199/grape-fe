import React from 'react'
import ListActivity from '../components/ListActivity'
import Modal from '../layouts/Modal'
import { handleModalAddExperiance } from '../lib/redux/features/resumeSlice'
import { useAppDispatch } from '../lib/redux/store'
import Button from './Button'
import Input from './Input'

type Props = {}

const AddExperiance = (props: Props) => {
  const dispatch =  useAppDispatch()
  return (
    <Modal label={"Add Experiance"} onClose={()=>dispatch(handleModalAddExperiance(false))}>
        <>
          <Input name="posisi" value="" />
          <Input name="Institution" value=""/>
          <div className='grid grid-cols-2 gap-4'>
            <Input name="Start Date" type="date" value=""/>
            <Input name="End Date" type="date" value=""/>
          </div>
          <Input customeStyle='items-start' type="checkbox" value="" name="Current Position" />
          <ListActivity/>
          <Button label="Save" customeStyle='bg-cd700 w-[5rem] ml-auto' onClick={()=>console.log("")}/>
        </>
    </Modal>
  )
}

export default AddExperiance