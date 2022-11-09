import React from 'react'
import FormEducationsAndSkills from '../components/FormEducationsAndSkills'
import FormPersonalInfo from '../components/FormPersonalInfo'
import StepsFormResume from '../components/StepsFormResume'
import Page from '../layouts/Page'
import { useAppSelector } from '../lib/redux/store'
import Button from '../atoms/Button'
type Props = {}

const FormResume = (props: Props) => {
  const currentStep = useAppSelector(state=>state.resume.currentStepFormResume)

  return (
    <Page title={"form resume | grape"}>
      <div className='flex p-4 flex-[1] overflow-hidden md:flex-[0.6] flex-col items-center mx-auto'>
        <StepsFormResume/>
        {currentStep==1&&<FormPersonalInfo/>}
        {currentStep==2&&<FormEducationsAndSkills/>}
        <div className='ml-auto'>
            {
              currentStep != 1 && 
              <Button customeStyle='bg-pink-800 mr-4' label={"Back"} onClick={()=>console.log("")}/>
            }
            <Button label={"Next"} customeStyle={`bg-sky-800 mt-4 ml-auto`} onClick={()=>console.log("test")}/>
        </div>
      </div>
    </Page>
  )
}

export default FormResume