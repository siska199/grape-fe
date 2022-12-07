import React from 'react'
import StepFormResume from '../atoms/StepFormResume'
import { useAppSelector } from '../lib/redux/store'

type Props = {}

const StepsFormResume = (props: Props) => {
  const steps = useAppSelector(state=>state.resume.stepsFormResume)
  return (
    <div className='flex mb-[2rem] mx-1 max-w-full'>
        {
            steps.map((step,i)=>(
                <StepFormResume name={step.name} done={step.done} key={i} step={i+1}/>
            ))
        }
    </div>
  )
}

export default StepsFormResume