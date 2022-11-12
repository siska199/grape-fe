import React from 'react'
import AddField from '../layouts/AddField'
import Input from './Input'
import Button from './Button'
type Props = {}

const AddActivity = (props: Props) => {
  return (
    <AddField onClose={()=>console.log("")} direction="horizontal">
        <Input name={"Activity"} value={""}/>
        <Button label={"Add"} onClick={()=>console.log("")} customeStyle={"bg-cd700 h-[2.3rem] mt-auto"}/>
    </AddField>
  )
}

export default AddActivity