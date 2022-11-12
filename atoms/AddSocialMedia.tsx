import React from 'react'
import Button from './Button'
import Input from './Input'
import AddField from '../layouts/AddField'

type Props = {}

const AddSocialMedia = (props: Props) => {

    
  return (
    <AddField onClose={()=>console.log()}>
          <Input name={"name"} value={""} customeStyle={"w-[40%]"}/>
          <Input name={"link"} value={""} customeStyle={"w-full"}/>   
          <Button customeStyle={"bg-cd700 mt-auto h-[2.2rem]"} label={"Add"} onClick={()=>console.log("")}/>  

    </AddField>

  )
}

export default AddSocialMedia