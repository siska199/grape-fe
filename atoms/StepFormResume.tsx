import React from 'react'
import {MdOutlineDone} from "react-icons/md"
import { useAppSelector } from '../lib/redux/store';
type Props = {
    name : string;
    done : boolean;
    step: number;
}

const StepFormResume = ({name, done, step}: Props) => {
    const currentStep = useAppSelector(state=>state.resume.currentStepFormResume)
    return (
        <section className={`border-b cursor-pointer py-2 px-4 flex ${step<=currentStep&&"border-b-2 border-teal-700 "} mb-auto justify-center items-center flex-col font-thin`}>
            <div className={`${done?"bg-green-700":"bg-cd700"} ${step==currentStep&&" bg-teal-700 font-semibold"} w-5 h-5 rounded-full flex justify-center items-center`}>
            {
                done?<MdOutlineDone/> :step
            }
            </div>
            <p className='text-center'>{name}</p>
        </section>
    )
}

export default StepFormResume