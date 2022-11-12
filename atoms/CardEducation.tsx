import React from 'react'

type Props = {
    data : {
        institution : string;
        major : string;
        logo? : string;
        activities : string[]
    }
}

const CardEducation = ({data}: Props) => {
  return (
    <section className='rounded-sm text-cd300 p-5 font-thin text-sm w-full bg-cyan-900 '>
        <header className='flex gap-2'>
            <img className='h-[3rem] w-[3rem]' src={data.logo} alt="Logo Institution"/>
            <div>
                <h1 className='font-bold'>{data.institution}</h1>
                <p>{data.major}</p>
            </div>
        </header>
        <ul className='mt-2'>
            {
                data.activities.map((data=>(
                    <li>&#127826; {data}</li>
                )))
            }
        </ul>
    </section>
  )
}

export default CardEducation