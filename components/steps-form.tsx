import Step from '@atoms/common/step'
import { useAppSelector } from '../lib/redux/store'

const StepsForm = (props: {}) => {
  const steps = useAppSelector(state=>state.resume.stepsFormResume)
  return (
    <div className='flex mb-[2rem] mx-1 max-w-full'>
        {
            steps.map((step,i)=>(
                <Step name={step.name} done={step.done} key={i} step={i+1}/>
            ))
        }
    </div>
  )
}

export default StepsForm