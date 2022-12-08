import React from 'react'
import AddField from '@layouts/AddField'
import Input from '@atoms/input/input'
import Button from '@atoms/common/button'

const AddActivity = (props: undefined) => {
  const handleOnChange = (e :React.ChangeEvent)=>{

  }
  return (
    <AddField onClose={()=>console.log("")} direction="horizontal">
        <Input type={"text"} onChange={handleOnChange} name={"Activity"} value={""}/>
        <Button name={"Add"} onClick={()=>console.log("")} customeStyle={"bg-cd700 h-[2.3rem] mt-auto"}/>
    </AddField>
  )
}

export default AddActivity