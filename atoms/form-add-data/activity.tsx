import Button from '@atoms/common/button'
import Input from '@atoms/input/input'
import AddField from '@layouts/add-field'
import { useAppSelector } from '@lib/redux/store'
import useOnCRUD from 'hooks/form/useOnCRUD'
import useOnChange from 'hooks/form/useOnChange'
import React from 'react'

const AddActivity = (props:{}) => {
  const form = useAppSelector(state=>state.resume.form.activity)
  console.log("form activity: ", form)
  const {handleOnChange} = useOnChange({formName:"activity",formClass:"form-activity"})
  const {handleAddData, handleResetForm} = useOnCRUD({
    type:"activity",
    parentName:"education",
  })
  return (
    <AddField formClass='form-activity' onClose={handleResetForm}>
        <Input type={"text"} onChange={handleOnChange} name={"name"} value={form.name} />
        <Button name={"Add"} onClick={handleAddData} customeStyle={"bg-cd700 h-[2.3rem] mt-auto"}/>
    </AddField>
  )
}

export default AddActivity