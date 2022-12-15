import { generateURLImage } from '@lib/helper'
import { handleChangeField } from '@lib/redux/features/resumeSlice'
import { useAppDispatch } from '@lib/redux/store'
import React from 'react'


const useOnChange = (typeForm:string) => {
   const dispatch = useAppDispatch()
   
   const handleOnChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    e.preventDefault()
    const data = {
      type : typeForm,
      value : e.target.value,
      name : e.target.name
    }
    dispatch(handleChangeField(data))
  }

  const handleOnChangePhone = (dataInput : TDataInputCustome)=>{
    const data = {
      type :  typeForm,
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
          type :  typeForm,
          value : {
            file : null,
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
  const handleRemoveImage = ()=>{
    const data = {
      type : typeForm,
      value : {
        file : null,
        url : "",
        imageName : ""
      },
      name : "image"
    }
    dispatch(handleChangeField(data))
  }
  
  return { handleOnChange, handleOnChangeImage,handleRemoveImage,handleOnChangePhone}
}

export default useOnChange