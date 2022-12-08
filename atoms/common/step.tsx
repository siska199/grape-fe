import { useAppSelector } from '@lib/redux/store';
import { MdOutlineDone } from "react-icons/md";

type TProps = {
    name : string;
    done : boolean;
    step: number;
}

const Step = (props: TProps) => {
    const {name, done, step} = props
    const currentStep = useAppSelector(state=>state.resume.currentStepFormResume)
    return (
        <section className={`border-b h-[5rem] lg:h-auto text-[0.7rem] md:text-[1rem]  cursor-pointer py-2 px-2 md:px-4 flex ${step<=currentStep&&"border-b-2 border-teal-700 "} mb-auto items-center flex-col font-thin`}>
            <div className={`${done?"bg-green-700":"bg-cd700"} ${step==currentStep&&" bg-teal-700 font-semibold"} w-5 h-5 rounded-full flex justify-center items-center`}>
            {
                done?<MdOutlineDone/> : step
            }
            </div>
            <p className='text-center mt-1'>{name}</p>
        </section>
    )
}

export default Step