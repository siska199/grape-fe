import {createSlice} from "@reduxjs/toolkit"

export const initialState = {
    modalAddEducation : false,
    modalAddExperiance : false,
    modalAddProject : false,
    currentStepFormResume : 4,
    stepsFormResume : [
        {
            name : "Personal Info",
            done : true,
            step: 1
        }, {
            name : "Educations and Skills",
            done : true,
            step: 2
        },{
            name : "Experiances",
            done : true,
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
        handleModalAddEducation : (state, action)=>{
            state.modalAddEducation = action.payload
        },
        handleModalAddExperiance : (state, action)=>{
            state.modalAddExperiance = action.payload
        },
        handleModalAddProject : (state, action)=>{
            state.modalAddProject = action.payload
        }
    }
})
export const { handleModalAddEducation, handleModalAddProject, handleModalAddExperiance} = resumeSlice.actions
export default resumeSlice.reducer