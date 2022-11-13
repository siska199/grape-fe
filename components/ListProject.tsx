import React from 'react'
import LabelWithPlusButton from '../atoms/LabelWithPlusButton'
import { handleModalAddProject } from '../lib/redux/features/resumeSlice'
import { useAppDispatch } from '../lib/redux/store'

type Props = {}

const ListProject = (props: Props) => {
    const disptach = useAppDispatch()
  return (
    <div className='container-dashed'>
        <LabelWithPlusButton name={"Projects"} onAdd={()=>disptach(handleModalAddProject(true))}/>
        <div className='container-card'>
            {
                
            }
        </div>
    </div>
  )
}

export default ListProject