import React from 'react'
import Button from '@atoms/common/button'
import Input from '@atoms/input/input'
import AddField from '@layouts/AddField'

const AddSocialMedia = (props: undefined) => {
  return (
    <AddField onClose={()=>console.log()}>
          <Input name={"name"} value={""} customeStyle={"w-[40%]"}/>
          <Input name={"link"} value={""} customeStyle={"w-full"}/>   
          <Button customeStyle={"bg-cd700 mt-auto h-[2.2rem]"} name={"Add"} onClick={()=>console.log("")}/>  
    </AddField>

  )
}

export default AddSocialMedia