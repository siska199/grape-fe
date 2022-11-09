import React from 'react'
import { InputProps } from '../lib/typescript'

const TextArea = ({name, value,}: InputProps) => {
  return (
    <div className={`flex flex-col w-full`}>
      <label className='label'>{name.toUpperCase()}</label>
      <textarea rows={5} value={value} className="input">
      </textarea>
    </div>
  )
}

export default TextArea