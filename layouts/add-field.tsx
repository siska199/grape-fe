import React from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";

type Props = {
    children : React.ReactNode;
    onClose : ()=>void;
    direction? : "vertical" | "horizontal" ;
    formClass : string;
    
}

const AddField = (props: Props) => {
    const {children, direction, onClose,formClass} = props
  return (
    <div className={` container-dashed relative ${formClass}`}>
        <AiOutlineCloseCircle onClick={onClose} className='-top-2 absolute -right-2 font-thin cursor-pointer'/>
        <div className='px-4 flex gap-4'>
            {children}
        </div>
    </div>
    )
}

export default AddField