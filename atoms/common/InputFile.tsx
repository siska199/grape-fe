import React, { ComponentPropsWithRef, forwardRef } from 'react'

type TInputProps = ComponentPropsWithRef<'input'>&React.InputHTMLAttributes<HTMLInputElement>&{
    fileExist : string;
    ref: React.MutableRefObject<HTMLInputElement | null>
}

const InputFile= forwardRef<HTMLInputElement,TInputProps>((props,ref) => {
  return (
   <input {...props} ref={ref} />
  )
})

export default InputFile