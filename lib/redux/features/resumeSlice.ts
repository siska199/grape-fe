import {createSlice} from "@reduxjs/toolkit"

export const initialState = {
    modalAddSocialMedia : false,
    currentStepFormResume : 2,
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
        handleAddModalSocialMedia : (state, action)=>{
            state.modalAddSocialMedia = action.payload
        }
    }
})
export const {handleOnChangeForm, handleAddModalSocialMedia} = resumeSlice.actions
export default resumeSlice.reducer