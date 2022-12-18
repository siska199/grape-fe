import { validationForm } from './../../helper/index';
import { elementInsideResumeFrom } from './../../data/index';
import {createSlice, current, PayloadAction} from "@reduxjs/toolkit"
import { uuid } from 'uuidv4';

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
    form : {
        personalInfo : {
            fullname : "",
            image : {
                fileExist : "false",
                url : "",
                imageName : ""
            },
            phone: "",
            email : "",
            aboutMe : "",
            socialMedias : []
        },
        socialMedia : {
            name : "",
            link : "",
        },
        activity : {
            name : "",
            id : ""
        },
        education : {
            institution : "",
            major : "",
            logo : {
                fileExist : "false",
                url : "",
                imageName : ""
            },
            activities : []
        },
        skill : {
            name : "",
            level : "",
            type : ""
        },
        educationsAndSkills:{
            educations : [],
            skills : []
        }
    }
    
}


interface TPayloadOnChange{
    type : string ,
    name : string,
    value : string | {
        fileExist : "false" | "true";
        url : string | ArrayBuffer |null,
        imageName : string
    } | number
}
type TPayloadAddListDataForm = {
    parentName : string ,
} & Pick<TPayloadOnChange,"type">

type TPayloadEditListDataForm = {
    id : string,
} & TPayloadAddListDataForm

type TPayloadDeleteListDataForm = TPayloadEditListDataForm

type TPayloadResetDataForm =Pick<TPayloadAddListDataForm,"parentName"|"type">

const resumeSlice = createSlice({
    name:"resume",
    initialState,
    reducers : {
        /**
         * Law : handle on change form
         */
        handleChangeField : (state,action:PayloadAction<TPayloadOnChange>)=>{
            state.form[action.payload.type] = {
                ...state.form[action.payload.type],
                [action.payload.name] : action.payload.value
            }
        },
        /**
         * 
         * Law : handle add, edit, delete data to list
         */
        handleAddListDataForm : (state, action:PayloadAction<TPayloadAddListDataForm>)=>{
            const newData = {
                id : uuid(),
                ...state.form[action.payload.type]
            }
            const keyParent = state.form[action.payload.parentName]
            keyParent[`${action.payload.type}s`]= [
                ...keyParent[`${action.payload.type}s`],
                newData
                
            ]
            state.form[action.payload.type] = initialState.form[action.payload.type]
        },
        handleEditListData : (state,action:PayloadAction<TPayloadEditListDataForm>)=>{
            const keyParent = state.form[action.payload.parentName]
            const dataEdited = keyParent[`${action.payload.type}s`].filter(data=>data.id==action.payload.id)[0]
            state.form[action.payload.type] = dataEdited
        },
        handleDeleteListData : (state,action:PayloadAction<TPayloadDeleteListDataForm>)=>{
            const keyParent = state.form[action.payload.parentName]
            keyParent[`${action.payload.type}s`] = keyParent[`${action.payload.type}s`].filter(data=>data.id!=action.payload.id) 
        },
        /**
         * Law : Reset form data
         */
        handleResetFormData : (state,action:PayloadAction<TPayloadResetDataForm>)=>{
            state.form[action.payload.type] = initialState.form[action.payload.type]
        },
        /**
         * Law : if user click next so we will hit api save with status undone if  currentStepFormResume < 5
         */
        handleNextStep : (state,action:PayloadAction<undefined>)=>{
            const currentStep = current(state).currentStepFormResume

            let allowNextStep = false

            switch(currentStep){
                case 1:
                    allowNextStep =  validationForm(elementInsideResumeFrom.personalInfo)
                    break;
                case 2:
                    break;
                case 3:
                    break;
                case 4:
                    break;
                default:
                    break;
            }
            if(allowNextStep){
                state.stepsFormResume = current(state).stepsFormResume.map(data=>{
                    if(currentStep==data.step){
                        return {
                            ...data,
                            done:true
                        }
                    }
                    return data
                })
                state.currentStepFormResume = currentStep +1
            }else{
                alert("FORBIDDEN TO NEXT STEP")
            }
        },
        /**
         * Law : if user beack currentStepForResume will minus 1 
         */
        handleBackStep : (state,action:PayloadAction<undefined>)=>{
            state.currentStepFormResume = current(state).currentStepFormResume -1
        },
        /**
         * Handle modal
         */
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
export const { handleResetFormData,handleChangeField, handleEditListData,  handleDeleteListData ,handleAddListDataForm, handleBackStep,handleNextStep, handleModalAddEducation, handleModalAddProject, handleModalAddExperiance} = resumeSlice.actions
export default resumeSlice.reducer