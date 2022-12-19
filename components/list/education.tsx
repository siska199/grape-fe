import Education from '@atoms/card/education'
import Label from '@atoms/common/lebel-with-button'
import AddEducation from '@atoms/form-add-data/education'
import { handleModalAddEducation } from '@lib/redux/features/resumeSlice'
import { useAppDispatch, useAppSelector } from '@lib/redux/store'

const ListEducation = (props: {}) => {
    const educations = useAppSelector(state=>state.resume.form.educationsAndSkills.educations)
    const modalAddEducation = useAppSelector(state=>state.resume.modalAddEducation)
    const dispatch = useAppDispatch()
  return (
    <div className='container-dashed'>
        <Label name="Educations" onAdd={()=>dispatch(handleModalAddEducation(true))}/>
        <div className='container-card'>
        {
            educations.map((education:TEducation,i:number)=>(
            <Education key={i}  {...education}/>
            ))
        }
        </div>
        {
            modalAddEducation && (
                <AddEducation/>
            )
        }
    </div>
  )
}

export default ListEducation