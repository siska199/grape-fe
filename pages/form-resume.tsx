import React from 'react'
import FormEducationsAndSkills from '../components/FormEducationsAndSkills'
import FormPersonalInfo from '../components/FormPersonalInfo'
import StepsFormResume from '../components/StepsFormResume'
import Page from '../layouts/Page'
import { useAppDispatch, useAppSelector } from '../lib/redux/store'
import Button from '../atoms/Button'
import FormExperiance from '../components/FormExperiance'
import FormProjects from '../components/FormProjects'
import { handleBackStep, handleNextStep } from '../lib/redux/features/resumeSlice'
type Props = {}

const FormResume = (props: Props) => {
  const dispatch = useAppDispatch()
  const currentStep = useAppSelector(state=>state.resume.currentStepFormResume)

  return (
    <Page title={"form resume | grape"}>
      <div className='flex p-4 flex-[1] overflow-hidden md:flex-[0.7] xl:flex-[0.6] flex-col items-center mx-auto'>
        <StepsFormResume/>
        {currentStep==1&&<FormPersonalInfo/>}
        {currentStep==2&&<FormEducationsAndSkills/>}
        {currentStep==3&&<FormExperiance/>}
        {currentStep==4&&<FormProjects/>}
        <div className='ml-auto'>
            {
              currentStep != 1 && 
              <Button customeStyle='bg-pink-800 mr-4' label={"Back"} onClick={()=>dispatch(handleBackStep())}/>
            }
            <Button label={"Next"} customeStyle={`bg-sky-800 mt-4 ml-auto`} onClick={()=>dispatch(handleNextStep())}/>
        </div>
      </div>
    </Page>
  )
}

export default FormResume