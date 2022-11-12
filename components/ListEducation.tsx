import React from 'react'
import {BsPlusSquare} from "react-icons/bs"
import AddEducation from '../atoms/AddEducation'
import CardEducation from '../atoms/CardEducation'
import { educations } from '../lib/data'
import { handleModalAddEducation } from '../lib/redux/features/resumeSlice'
import { useAppDispatch, useAppSelector } from '../lib/redux/store'
type Props = {}

const ListEducation = (props: Props) => {
    const modalAddEducation = useAppSelector(state=>state.resume.modalAddEducation)
    const dispatch = useAppDispatch()
  return (
    <div className='container-dashed'>
        <label htmlFor="" className='label flex gap-2 items-center'>EDUCATIONS <BsPlusSquare onClick={()=>dispatch(handleModalAddEducation(true))} className='cursor-pointer'/> </label>
        <div className='gap-[1.5rem] grid grid-cols-1 md:grid-cols-2 '>
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