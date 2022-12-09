import Button from '@atoms/common/button'
import Input from '@atoms/input/input'
import AddField from '@layouts/add-field'
import React from 'react'

const AddSocialMedia = (props: {}) => {
  const handleOnChange = (e : React.ChangeEvent<HTMLInputElement>)=>{
    
  }
  return (
    <AddField onClose={()=>console.log()}>
          <Input onChange={handleOnChange} type="text" name={"name"} value={""} customeStyle={"w-[40%]"}/>
          <Input onChange={handleOnChange} type="text" name={"link"} value={""} customeStyle={"w-[40%]"}/>   
          <Button customeStyle={"bg-cd700 mt-auto h-[2.2rem]"} name={"add"} onClick={()=>console.log("")}/>  
    </AddField>

  )
}

export default AddSocialMedia