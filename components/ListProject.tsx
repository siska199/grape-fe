import React from 'react'
import LabelWithPlusButton from '../atoms/LabelWithPlusButton'
import { handleModalAddProject } from '../lib/redux/features/resumeSlice'
import { useAppDispatch } from '../lib/redux/store'
import { projects } from '../lib/data'
import CardProject from '../atoms/CardProject'

type Props = {}

const ListProject = (props: Props) => {
    const disptach = useAppDispatch()
  return (
    <div className='container-dashed'>
        <LabelWithPlusButton name={"Projects"} onAdd={()=>disptach(handleModalAddProject(true))}/>
        <div className='container-card'>
            {
                projects.map((data,i)=>(
                    <CardProject key={i} data={data}/>
                ))
            }
        </div>
    </div>
  )
}

export default ListProject