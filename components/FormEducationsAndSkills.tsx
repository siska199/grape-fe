import React from 'react'
import ListEducation from './ListEducation'
import ListSkill from './ListSkill'

type Props = {}

const FormEducationsAndSkills = (props: Props) => {


  return (
    <div className='container-form'>
      <ListEducation/>
      <ListSkill/>
    </div>
  )
}

export default FormEducationsAndSkills