import Button from '@atoms/common/button';
import React from 'react';
import { IoMdCloseCircle } from "react-icons/io";

type TProps = {
    children : React.ReactNode;
    title? : string;
    onClose : ()=>void;
    onSave : ()=>void;
}

const Modal = ({children, title, onClose, onSave}: TProps) => {
  return (
    <article className='fixed z-[999] top-0 left-0  bg-white/20 flex justify-center items-center w-full h-full'>
        <section className='font-thin w-[40rem]  p-4 min-h-[20rem] border relative border-dashed bg-cd900 shadow-md shadow-cd800'>
            <IoMdCloseCircle onClick={onClose} className='close-button'/>
            <h1 className='text-center font-thin text-[1.5rem]'>{title}</h1>
            <form action="" className='flex flex-col gap-4 px-4 max-h-[30rem] overflow-x-hidden overflow-y-scroll '>
              {children}
            </form>
            <div className=' sticky bottom-0 bg-cd900 pt-4 flex'>
              <Button name={"save"} customeStyle='bg-cd700 py-2 w-[7rem] ml-auto' onClick={onSave}/>
            </div>
        </section>
    </article>
  )
}

export default Modal