import React from 'react'

type Props = {
  data : {
      posisi : string;
      currentPosition : boolean;
      startDate : number;
      endDate : number;
      institution : string;
      activities : string[];
      logo : string;
  }
}

const CardExperiance = ({data}: Props) => {
  return (
    <div className='card bg-cd800'>
      <header className='flex items-center flex-col'>
        <img className='h-[3rem] w-[3rem]' src={data.logo}/>
        <h1 className='font-semibold'>{data.institution}</h1>
        <h5 className='font-semimedium'>{data.posisi}</h5>
        <p className='text-[0.7rem]'>{data.startDate} - {data.endDate}</p>
      </header>
      <ul className='mt-4'>
        {
          data.activities.map((activity,i)=>(
            <li className='border mb-2 p-1 border-dashed'>&#127827; {activity}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default CardExperiance