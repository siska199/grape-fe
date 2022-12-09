import Project from '@atoms/card/project'
import Label from '@atoms/common/lebel-with-button'
import AddProject from '@atoms/form-add-data/project'
import { projects } from '@lib/data'
import { handleModalAddProject } from '@lib/redux/features/resumeSlice'
import { useAppDispatch, useAppSelector } from '@lib/redux/store'

type Props = {}

const ListProject = (props: Props) => {
    const disptach = useAppDispatch()
    const modalAddProject = useAppSelector(state=>state.resume.modalAddProject)
  return (
    <div className='container-dashed'>
        <Label name={"Projects"} onAdd={()=>disptach(handleModalAddProject(true))}/>
        <div className='container-card'>
            {
                projects.map((data,i)=>(
                    <Project key={i} {...data}/>
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