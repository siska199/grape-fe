import React from 'react'
import {AiOutlineCloseCircle} from "react-icons/ai"

type Props = {
    children : React.ReactNode;
    onClose : ()=>void;
    direction? : "vertical" | "horizontal" 
    
}

const AddField = ({children, direction, onClose}: Props) => {
  return (
    <div className='container-dashed relative' style={{flexDirection:direction=="horizontal"?"row":"column"}}>
        <AiOutlineCloseCircle className='-top-2 absolute -right-2 font-thin cursor-pointer'/>
        {children}
    </div>
    )
}

export default AddField