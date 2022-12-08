import React from 'react'
import { TInputProps } from '@lib/typescript/type-props'

type TProps = TInputProps<HTMLInputElement>

const Input = (props: TProps) => {
  const {name,value,type="text",customeStyle, onChange} = props
  return (
    <div className={`flex flex-col ${customeStyle} w-full `}>
        <label htmlFor={name} className='label'>{name.toUpperCase()}</label>
        <input onChange={onChange} type={type} value={value} name={name} className={`input ${type=="checkbox" && "w-[1.5rem] h-[1.5rem]"}`} />
    </div>  )
}

export default Input