import React, { useState } from 'react'
import Modal from '../layouts/Modal'
import Button from './Button'
import Input from './Input'
import UploadPhoto from './UploadPhoto'
import {IoMdCloseCircle} from "react-icons/io"
import {BsPlusSquare} from "react-icons/bs"
import { useAppDispatch } from '../lib/redux/store'
import { handleModalAddEducation } from '../lib/redux/features/resumeSlice'
import {AiOutlineCloseCircle} from "react-icons/ai"
import AddField from '../layouts/AddField'

type Props = {}

const AddEducation = (props: Props) => {
    const dispatch = useAppDispatch()
    const [addActivity, setAddActivity] = useState(false)
    const activities = [
        "PPA scholarship recipients for 2018-2019 period."
    ]
  return (
    <Modal>
        <section className='font-thin w-[40rem] p-4 min-h-[20rem] border relative border-dashed bg-cd900 shadow-md shadow-cd800'>
            <IoMdCloseCircle onClick={()=>dispatch(handleModalAddEducation(false))} className='close-button'/>
            <h1 className='text-center font-thin text-[1.5rem]'>Add Education </h1>
            <form action="" className='flex flex-col gap-4'>
                <Input name={"institution"} value={""} />
                <Input name={"major"} value={""} />
                <UploadPhoto name={"logo"} value={""}/>
                <div>
                    <label htmlFor="" className='label flex items-center gap-2'>ACTIVITIES <BsPlusSquare onClick={()=>setAddActivity(true)} className="cursor-pointer"/></label>
                    <ul>
                        {
                            activities.map((activity)=>(
                                <li>&#127826; {activity}</li>
                            ))
                        }
                    </ul>
                    {
                        addActivity && (
                            <AddField onClose={()=>console.log("")}>
                                <Input name={"Activity"} value={""}/>
                                <Button label={"Add"} onClick={()=>console.log("")} customeStyle={"bg-cd700 h-[2.3rem] mt-auto"}/>
                            </AddField>
                        )
                    }
                </div>
                <Button label={"Save"} customeStyle={"ml-auto bg-sky-800"} onClick={()=>console.log("")}/>
            </form>

        </section>
    </Modal>
  )
}

export default AddEducation