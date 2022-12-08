import React from 'react'
import {BsPlusSquare} from "react-icons/bs"
import AddEducation from '../atoms/AddEducation'
import CardEducation from '../atoms/CardEducation'
import LabelWithPlusButton from '../atoms/LabelWithPlusButton'
import { educations } from '../lib/data'
import { handleModalAddEducation } from '../lib/redux/features/resumeSlice'
import { useAppDispatch, useAppSelector } from '../lib/redux/store'
type Props = {}

const ListEducation = (props: Props) => {
    const modalAddEducation = useAppSelector(state=>state.resume.modalAddEducation)
    const dispatch = useAppDispatch()
  return (
    <div className='container-dashed'>
        <LabelWithPlusButton name="Educations" onAdd={()=>dispatch(handleModalAddEducation(true))}/>
        <div className='container-card'>
        {
            educations.map((education,i)=>(
            <CardEducation key={i}  data={education}/>
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