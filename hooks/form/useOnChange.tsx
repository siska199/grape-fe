import { generateURLImage } from '@lib/helper'
import { handleChangeField } from '@lib/redux/features/resumeSlice'
import { useAppDispatch } from '@lib/redux/store'
import React from 'react'

type TProps = {
  formName : string;
  formClass? : string
}

const useOnChange = (props:TProps) => {
  const {formName,formClass} = props
   const dispatch = useAppDispatch()
   
   const handleOnChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    e.preventDefault()
    const data = {
      type : formName,
      value : e.target.value,
      name : e.target.name
    }
    dispatch(handleChangeField(data))
  }

  const handleOnChangePhone = (dataInput : TDataInputCustome)=>{
    const data = {
      type :  formName,
      value : dataInput.value,
      name : dataInput.name
    }
    dispatch(handleChangeField(data))
  }

  const handleOnChangeImage = (e:React.ChangeEvent<HTMLInputElement>)=>{
    e.stopPropagation()
    e.preventDefault()
    const target = e.target
    if(target.files){
      const imageName = target.files[0]? target.files[0].name : ""
      const callback =(url:TFileReader)=>{
        const data = {
        type :  formName,
        value : {
          fileExist : "true" as "true",
          url : url,
          imageName 
        },
          name : target.name
        }
        dispatch(handleChangeField(data))
      }
      generateURLImage(target.files[0], callback)
    }
  }
  const handleRemoveImage = (name:string)=>{
    const data = {
      type : formName,
      value : {
        fileExist : "false" as "false",
        url : "",
        imageName : ""
      },
      name : name
    }
    //Reset value : 
    const elementImage : HTMLInputElement | null = document.querySelector(`.${formClass} input[name=${name}]`)
    if(elementImage) elementImage.value = ""
    dispatch(handleChangeField(data))
  }
  
  return { handleOnChange, handleOnChangeImage,handleRemoveImage,handleOnChangePhone}
}

export default useOnChange