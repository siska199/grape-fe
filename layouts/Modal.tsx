import React from 'react'

type Props = {
    children : React.ReactNode
}

const Modal = ({children}: Props) => {
  return (
    <article className='fixed top-0 left-0 bg-black/50 flex justify-center items-center w-full h-full'>
        {children}
    </article>
  )
}

export default Modal