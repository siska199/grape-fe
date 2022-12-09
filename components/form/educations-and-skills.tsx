import ListEducation from '@components/list/education'
import ListSkill from '@components/list/skill'


const FormEducationsAndSkills = (props: {}) => {

  return (
    <div className='container-form'>
      <ListEducation/>
      <ListSkill/>
    </div>
  )
}

export default FormEducationsAndSkills