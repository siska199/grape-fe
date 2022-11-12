import React from 'react'

type Props = {
    children : React.ReactNode
}

const Modal = ({children}: Props) => {
  return (
    <article className='fixed top-0 left-0 bg-white/20 flex justify-center items-center w-full h-full'>
        {children}
    </article>
  )
}

export default Modal