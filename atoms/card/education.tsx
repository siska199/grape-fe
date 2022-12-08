import React from 'react'

type TProps = {
    institution : string;
    major : string;
    logo? : string;
    activities : string[]
}

const Education = (props: TProps) => {
    const {institution, major, logo, activities} = props
  return (
    <section className='card bg-cd800 '>
        <header className='flex gap-2'>
            <img className='h-[3rem] w-[3rem]' src={logo} alt="Logo Institution"/>
            <div>
                <h1 className='font-bold'>{institution}</h1>
                <p>{major}</p>
            </div>
        </header>
        <ul className='mt-2'>
            {
                activities.map(((data,i)=>(
                    <li key={i} className='border border-dashed p-1 mb-2'>&#127826; {data}</li>
                )))
            }
        </ul>
    </section>
  )
}

export default Education