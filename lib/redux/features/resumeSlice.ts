import {createSlice, current, PayloadAction} from "@reduxjs/toolkit"

export const initialState = {
    modalAddEducation : false,
    modalAddExperiance : false,
    modalAddProject : false,
    currentStepFormResume : 1,
    stepsFormResume : [
        {
            name : "Personal Info",
            done : false,
            step: 1
        }, {
            name : "Educations and Skills",
            done : false,
            step: 2
        },{
            name : "Experiances",
            done : false,
            step: 3
        },{
            name : "Projects",
            done : false,
            step : 4
        },{
            name : "Contact References",
            done : false,
            step:4
        }
    ],
    formPersonalInfo : {
        fullname : "",
        image : "",
        phone: "",
        email : "",
        aboutMe : "",
        socialMedias : []
    }
}



const resumeSlice = createSlice({
    name:"resume",
    initialState,
    reducers : {
        /**
         * law : if user click next so we will hit api save with status undone if  currentStepFormResume < 5
         */
        handleNextStep : (state,action:PayloadAction<undefined>)=>{
            state.stepsFormResume = current(state).stepsFormResume.map(data=>{
                if(current(state).currentStepFormResume==data.step){
                    return {
                        ...data,
                        done:true
                    }
                }
                return data

            })
            state.currentStepFormResume = current(state).currentStepFormResume +1
        },
        /**
         * Law : if user beack currentStepForResume will minus 1 
         */
        handleBackStep : (state,action:PayloadAction<undefined>)=>{
            state.currentStepFormResume = current(state).currentStepFormResume -1
        },
        handleModalAddEducation : (state, action:PayloadAction<boolean>)=>{
            state.modalAddEducation = action.payload
        },
        handleModalAddExperiance : (state, action:PayloadAction<boolean>)=>{
            state.modalAddExperiance = action.payload
        },
        handleModalAddProject : (state, action:PayloadAction<boolean>)=>{
            state.modalAddProject = action.payload
        }
    }
})
export const {handleBackStep,handleNextStep, handleModalAddEducation, handleModalAddProject, handleModalAddExperiance} = resumeSlice.actions
export default resumeSlice.reducer