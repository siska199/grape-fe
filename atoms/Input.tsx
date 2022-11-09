import React from 'react'
import { InputProps } from '../lib/typescript'

const Input = ({name,value,customeStyle}: InputProps) => {

  return (
    <div className={`flex flex-col ${customeStyle} w-full`}>
        <label className='label'>{name.toUpperCase()}</label>
        <input className='input' value={value}/>
    </div>  )
}

export default Input