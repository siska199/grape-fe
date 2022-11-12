import React from 'react'
import { InputProps } from '../lib/typescript'

const Input = ({name,value,type="text",customeStyle}: InputProps) => {

  return (
    <div className={`flex flex-col ${customeStyle} w-full `}>
        <label className='label'>{name.toUpperCase()}</label>
        <input className={`input ${type=="checkbox" && "w-[1.5rem] h-[1.5rem]"}`} type={type} value={value}/>
    </div>  )
}

export default Input