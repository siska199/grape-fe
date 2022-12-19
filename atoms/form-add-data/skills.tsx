import Button from '@atoms/common/button'
import Input from '@atoms/input/input'
import AddField from '@layouts/add-field'
import { skillLevel } from '@lib/data'
import React from 'react'
import SelectInput from '../input/select-input'

type TProps = {
  onClose : React.Dispatch<React.SetStateAction<boolean>>
}

const AddSkills = (props: TProps) => {
  const {onClose} = props
  const handleOnChange = (e : React.ChangeEvent<HTMLInputElement | HTMLOptionElement>)=>{

  }

  return (
    <AddField onClose={()=>{
      onClose(false)
    }} formClass="form-skills">
      <div className='w-full flex flex-col gap-2'>
        <div className='w-full grid grid-cols-2 gap-4'>
            <Input onChange={handleOnChange} type="text" name={"name"} value={""} customeStyle={"w-full"}/>
            <SelectInput value={""} onChange={handleOnChange} name={"level"} data={skillLevel} customeStyle={"w-full"}/>
        </div>
        <div className='w-full grid grid-cols-4 gap-4'>
            <Input onChange={handleOnChange} type="text" name={"type"} value={""} customeStyle={"w-full col-start-1 col-end-3"}/>
            <Button name={"add"} customeStyle={"bg-cd700 w-[4rem] mt-auto"} onClick={()=>console.log("")}/>
        </div>
      </div>
    </AddField>
  )
}

export default AddSkills