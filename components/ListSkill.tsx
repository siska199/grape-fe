import React from 'react'
import {BsPlusSquare } from "react-icons/bs"
import AddSkills from '../atoms/AddSkills'
import { skills } from '../lib/data'
type Props = {}

const ListSkill = (props: Props) => {
  
  return (
    <div>
      <label className='label flex gap-2 items-center'>
        SKILLS
        <BsPlusSquare className='cursor-pointer'/>
      </label>
      <AddSkills/>
    </div>
  )
}

export default ListSkill