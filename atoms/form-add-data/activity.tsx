import Button from '@atoms/common/button'
import Input from '@atoms/input/input'
import AddField from '@layouts/add-field'
import React from 'react'

const AddActivity = (props:{}) => {
  
  const handleOnChange = (e :React.ChangeEvent<HTMLInputElement>)=>{

  }

  return (
    <AddField onClose={()=>console.log("")} direction="horizontal">
        <Input type={"text"} onChange={handleOnChange} name={"activity"} value={""}/>
        <Button name={"Add"} onClick={()=>console.log("")} customeStyle={"bg-cd700 h-[2.3rem] mt-auto"}/>
    </AddField>
  )
}

export default AddActivity