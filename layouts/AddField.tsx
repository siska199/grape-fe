import React from 'react'
import {AiOutlineCloseCircle} from "react-icons/ai"

type Props = {
    children : React.ReactNode;
    onClose : ()=>void
}

const AddField = ({children, onClose}: Props) => {
  return (
    <div className='container-dashed'>
        <AiOutlineCloseCircle className='-top-2 absolute -right-2 font-thin cursor-pointer'/>
        {children}
    </div>
    )
}

export default AddField