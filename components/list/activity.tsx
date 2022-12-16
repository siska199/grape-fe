import Li from '@atoms/common/li'
import AddActivity from '@atoms/form-add-data/activity'
import { useAppSelector } from '@lib/redux/store'
import useOnCRUD from 'hooks/useOnCRUD'
import { useState } from 'react'
import { BsPlusSquare } from "react-icons/bs"

type TProps = {
    parentName : string;
}

const ListActivity = (props: TProps) => {
    const {parentName} = props
    const [addActivity, setAddActivity] = useState(false)
    const activities = useAppSelector(state=>state.resume.form.education.activities)
    const {handleDeleteData,handleEditData} = useOnCRUD({type:"activity",parentName:parentName})

    return(
        <div>
            <label htmlFor="" className='label flex items-center gap-2'>ACTIVITIES <BsPlusSquare onClick={()=>setAddActivity(true)} className="cursor-pointer"/></label>
            <ul>
                {
                    activities.map((data:TActivity,i:number)=>(
                        <Li key={i} type="text" name={data.name} id={data.id} onEdit={handleEditData} onRemove={handleDeleteData} />
                    ))
                }
            </ul>
            {
                addActivity && (
                    <AddActivity/>
                )
            }
        </div>
  )
}

export default ListActivity