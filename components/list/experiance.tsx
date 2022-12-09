import Experiance from '@atoms/card/experiance'
import Label from '@atoms/common/lebel-with-button'
import AddExperiance from '@atoms/form-add-data/experiance'
import { experiances } from '@lib/data'
import { handleModalAddExperiance } from '@lib/redux/features/resumeSlice'
import { useAppDispatch, useAppSelector } from '@lib/redux/store'

type Props = {}

const ListExperiance = (props: Props) => {
    const dispatch = useAppDispatch()
    const modalAddExperiance = useAppSelector(state=>state.resume.modalAddExperiance)
  return (
    <div className='container-dashed'>
        <Label name="Experiances" onAdd={()=>dispatch(handleModalAddExperiance(true))} />
        <div className='container-card'>
            {
                experiances.map((experiance,i)=>(
                    <Experiance key={i} {...experiance}/>
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