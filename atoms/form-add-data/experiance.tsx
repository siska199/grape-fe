import React from 'react'
import ListActivity from '@components/list/ListActivity'
import Modal from '@layouts/Modal'
import { handleModalAddExperiance } from '@lib/redux/features/resumeSlice'
import { useAppDispatch } from '@lib/redux/store'
import Button from '@atoms/common/button'
import Input from '@atoms/input/input'

const AddExperiance = (props: undefined) => {
  const dispatch =  useAppDispatch()
  return (
    <Modal title={"Add Experiance"} onSave={()=>console.log("save")} onClose={()=>dispatch(handleModalAddExperiance(false))}>
        <>
          <Input name="posisi" value="" />
          <Input name="Institution" value=""/>
          <div className='grid grid-cols-2 gap-4'>
            <Input name="Start Date" type="date" value=""/>
            <Input name="End Date" type="date" value=""/>
          </div>
          <Input customeStyle='items-start' type="checkbox" value="" name="Current Position" />
          <ListActivity/>
          <Button name="Save" customeStyle='bg-cd700 w-[5rem] ml-auto' onClick={()=>console.log("")}/>
        </>
    </Modal>
  )
}

export default AddExperiance