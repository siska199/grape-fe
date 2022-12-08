import React from 'react'

type TProps = {
  posisi : string;
  startDate : number;
  endDate : number;
  institution : string;
  activities : string[];
  logo : string;
}

const Experiance = (props: TProps) => {
  const {posisi,startDate, endDate, institution, activities, logo} = props
  return (
    <div className='card bg-cd800'>
      <header className='flex items-center flex-col'>
        <img className='h-[3rem] w-[3rem]' src={logo}/>
        <h1 className='font-semibold'>{institution}</h1>
        <h5 className='font-semimedium'>{posisi}</h5>
        <p className='text-[0.7rem]'>{startDate} - {endDate}</p>
      </header>
      <ul className='mt-4'>
        {
          activities.map((activity,i)=>(
            <li key={i} className='border mb-2 p-1 border-dashed'>&#127827; {activity}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Experiance