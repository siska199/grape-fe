import React from 'react'
import LabelWithPlusButton from '../atoms/LabelWithPlusButton'
import { handleModalAddProject } from '../lib/redux/features/resumeSlice'
import { useAppDispatch, useAppSelector } from '../lib/redux/store'
import { projects } from '../lib/data'
import CardProject from '../atoms/CardProject'
import AddProject from '../atoms/AddProject'

type Props = {}

const ListProject = (props: Props) => {
    const disptach = useAppDispatch()
    const modalAddProject = useAppSelector(state=>state.resume.modalAddProject)
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
        {
            modalAddProject && (
                <AddProject/>
            )
        }
    </div>
  )
}

export default ListProject