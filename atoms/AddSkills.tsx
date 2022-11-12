import React from 'react'
import Input from './Input'
import {AiOutlineCloseCircle} from "react-icons/ai"
import { skillLevel } from '../lib/data'
import Dropdown from './Dropdown'
import Button from './Button'
import AddField from '../layouts/AddField'
type Props = {}

const AddSkills = (props: Props) => {
  return (
    <AddField onClose={()=>console.log("")}>
      <div className='w-full flex flex-col gap-2'>
        <div className='w-full grid grid-cols-2 gap-4'>
            <Input name={"name"} value={""} customeStyle={"w-full"}/>
            <Dropdown name={"level"} data={skillLevel} customeStyle={"w-full"}/>
        </div>
        <div className='w-full grid grid-cols-4 gap-4'>
            <Input name={"type"} value={""} customeStyle={"w-full col-start-1 col-end-3"}/>
            <Button label={"add"} customeStyle={"bg-cd700 w-[4rem] mt-auto"} onClick={()=>console.log("")}/>
        </div>
      </div>
    </AddField>
  )
}

export default AddSkills