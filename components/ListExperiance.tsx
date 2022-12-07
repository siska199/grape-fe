import React from 'react'
import AddExperiance from '../atoms/AddExperiance'
import CardExperiance from '../atoms/CardExperiance'
import LabelWithPlusButton from '../atoms/LabelWithPlusButton'
import { experiances } from '../lib/data'
import { handleModalAddExperiance } from '../lib/redux/features/resumeSlice'
import { useAppDispatch, useAppSelector } from '../lib/redux/store'

type Props = {}

const ListExperiance = (props: Props) => {
    const dispatch = useAppDispatch()
    const modalAddExperiance = useAppSelector(state=>state.resume.modalAddExperiance)
  return (
    <div className='container-dashed'>
        <LabelWithPlusButton name="Experiances" onAdd={()=>dispatch(handleModalAddExperiance(true))} />
        <div className='container-card'>
            {
                experiances.map((experiance,i)=>(
                    <CardExperiance key={i} data={experiance}/>
                ))
            }
        </div>
        {
            modalAddExperiance && (
                <AddExperiance/>
            )
        }
    </div>
  )
}

export default ListExperiance