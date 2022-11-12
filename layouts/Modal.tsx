import React from 'react'
import {IoMdCloseCircle} from "react-icons/io"

type Props = {
    children : React.ReactNode;
    label? : string;
    onClose : ()=>void
}

const Modal = ({children, label, onClose}: Props) => {
  return (
    <article className='fixed top-0 left-0 bg-white/20 flex justify-center items-center w-full h-full'>
        <section className='font-thin w-[40rem] p-4 min-h-[20rem] border relative border-dashed bg-cd900 shadow-md shadow-cd800'>
            <IoMdCloseCircle onClick={onClose} className='close-button'/>
            <h1 className='text-center font-thin text-[1.5rem]'>{label}</h1>
            <form action=" 
            "className='flex flex-col gap-4'>
              {children}
            </form>
        </section>
    </article>
  )
}

export default Modal