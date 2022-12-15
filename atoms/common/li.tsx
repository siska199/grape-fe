import React from 'react'
import { motion } from 'framer-motion'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { TId } from '@lib/typescript/type-props';

type Props = {
    name : string;
    link? : string;
    id : TId;
    type : "link" | "text";
    onEdit : (id:TId)=>void;
    onRemove : (id:TId)=>void; 
}

const Li = (props: Props) => {
    const iconStyle= ' rounded-full w-[1.5rem] h-[1.5rem] p-1 flex justify-center items-center'
    const {name, link,type,id, onEdit, onRemove} = props
  return (
    <li className='font-thin flex justify-between border-b-[0.005rem] pb-2' >
        {type=="link"?(
            <a className='flex gap-2 items-center cursor-pointer hover:underline' href={link} target={"_black"}>🍬 {name} </a>
        ):(
            <p>{name}</p>
        )}
        <div className='flex gap-2'>
            <motion.span onClick={()=>onEdit(id)}  className={`${iconStyle} bg-green-600 hover:bg-green-500`} whileTap={{scale:0.9}}>
                <AiOutlineEdit  className="cursor-pointer"/>
            </motion.span>
            <motion.span onClick={()=>onRemove(id)} className={`${iconStyle} bg-red-600 hover:bg-red-500`} whileTap={{scale:0.9}}>
                <AiOutlineDelete  className="cursor-pointer"/>
            </motion.span>
        </div>
    </li>
  )
}

export default Li