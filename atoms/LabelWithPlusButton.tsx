import React from 'react'
import { BsPlusSquare } from 'react-icons/bs'

type Props = {
    name : string;
    onAdd : ()=>void;
}

const LabelWithPlusButton = ({name, onAdd}: Props) => {
  return (
    <label htmlFor="" className='label flex gap-2 items-center'>{name.toUpperCase()} <BsPlusSquare onClick={onAdd} className='cursor-pointer'/> </label>
    )
}

export default LabelWithPlusButton