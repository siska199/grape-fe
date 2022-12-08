import React from 'react'
import { MdLabel } from 'react-icons/md';

type TProps = {
  data : string[];
  name : string;
  customeStyle : string;
}

const Dropdown = (props: TProps) => {
  const {data,name, customeStyle} = props
  return (
    <div className={`${customeStyle} flex flex-col gap-1`}>
      <label htmlFor="">{name.toUpperCase()}</label>
      <select className={`input rounded-none`}>
        <option value="default" hidden>Choose Level of Skill</option>
        {
          data.map((value)=>(<option className='!rounded-none' value={value}>{value}</option>)
          )
        }
      </select>
    </div>
  )
}

export default Dropdown