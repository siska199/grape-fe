import Button from '@atoms/common/button'
import Input from '@atoms/input/input'
import ListActivity from '@components/list/ListActivity'
import Modal from '@layouts/Modal'
import { handleModalAddExperiance } from '@lib/redux/features/resumeSlice'
import { useAppDispatch } from '@lib/redux/store'
import React from 'react'

const AddExperiance = (props:{}) => {
  const dispatch =  useAppDispatch()
  const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>)=>{

  }
  return (
    <Modal title={"Add Experiance"} onSave={()=>console.log("save")} onClose={()=>dispatch(handleModalAddExperiance(false))}>
        <>
          <Input type="text" onChange={handleOnChange} name="posisi" value="" />
          <Input type="text" onChange={handleOnChange} name="Institution" value=""/>
          <div className='grid grid-cols-2 gap-4'>
            <Input type="date" onChange={handleOnChange} name="Start Date"  value=""/>
            <Input type="date" onChange={handleOnChange} name="End Date"  value=""/>
          </div>
          <Input type="checkbox"  onChange={handleOnChange} customeStyle='items-start' value="" name="Current Position" />
          <ListActivity/>
          <Button name="Save" customeStyle='bg-cd700 w-[5rem] ml-auto' onClick={()=>console.log("")}/>
        </>
    </Modal>
  )
}

export default AddExperiance