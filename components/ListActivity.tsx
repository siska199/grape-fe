import React, {useState} from 'react'
import AddActivity from '../atoms/AddActivity'
import {BsPlusSquare} from "react-icons/bs"

type Props = {}

const ListActivity = ({}: Props) => {
    const [addActivity, setAddActivity] = useState(false)
    const activities = [
        "PPA scholarship recipients for 2018-2019 period."
    ]
    return(
        <div>
            <label htmlFor="" className='label flex items-center gap-2'>ACTIVITIES <BsPlusSquare onClick={()=>setAddActivity(true)} className="cursor-pointer"/></label>
            <ul>
                {
                    activities.map((activity,i)=>(
                        <li key={i}>&#127826; {activity}</li>
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