import React from 'react'

type Props = {
  onClick : ()=>void;
  customeStyle : string;
  label : string;
}

const Button = ({onClick, customeStyle, label }: Props) => {
  return (
    <button onClick={()=>onClick()} className={`text-sm h-[2rem] px-4 ${customeStyle}`}>{label}</button>
    )
}

export default Button