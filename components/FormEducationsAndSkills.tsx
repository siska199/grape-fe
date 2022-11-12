import React from 'react'
import ListEducation from './ListEducation'
import ListSkill from './ListSkill'

type Props = {}

const FormEducationsAndSkills = (props: Props) => {


  return (
    <div className='w-full flex flex-wrap flex-col gap-4'>
      <ListEducation/>
      <ListSkill/>
    </div>
  )
}

export default FormEducationsAndSkills