import Button from '@atoms/common/button'
import FormEducationsAndSkills from '@components/form/educations-and-skills'
import FormExperiance from '@components/form/experiances'
import FormPersonalInfo from '@components/form/personal-info'
import FormProjects from '@components/form/projects'
import StepsForm from '@components/steps-form'
import Page from '@layouts/page'
import { handleBackStep, handleNextStep } from '@lib/redux/features/resumeSlice'
import { useAppDispatch, useAppSelector } from '@lib/redux/store'

const FormResume = (props: {}) => {
  const dispatch = useAppDispatch()
  const currentStep = useAppSelector(state=>state.resume.currentStepFormResume)

  return (
    <Page title={"form resume | grape"}>
      <div className='flex p-4 flex-[1] overflow-hidden md:flex-[0.7] xl:flex-[0.6] flex-col items-center mx-auto'>
        <StepsForm/>
        {currentStep==1&&<FormPersonalInfo/>}
        {currentStep==2&&<FormEducationsAndSkills/>}
        {currentStep==3&&<FormExperiance/>}
        {currentStep==4&&<FormProjects/>}
        <div className='ml-auto'>
            {
              currentStep != 1 && 
              <Button customeStyle='bg-pink-800 mr-4' name={"back"} onClick={()=>dispatch(handleBackStep())}/>
            }
            <Button name={"next"} customeStyle={`bg-violet-800 mt-4 ml-auto text-white`} onClick={()=>dispatch(handleNextStep())}/>
        </div>
      </div>
    </Page>
  )
}

export default FormResume