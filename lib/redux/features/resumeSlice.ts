import {createSlice} from "@reduxjs/toolkit"

export const initialState = {
    modalAddEducation : false,
    currentStepFormResume : 3,
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
        handleOnChangeForm : (state, action)=>{

        },
        handleModalAddEducation : (state, action)=>{
            state.modalAddEducation = action.payload
        }
    }
})
export const {handleOnChangeForm, handleModalAddEducation} = resumeSlice.actions
export default resumeSlice.reducer