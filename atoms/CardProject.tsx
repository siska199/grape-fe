import React from 'react'

type Props = {
    data : {
       title : string;
       name : string;
       image : string;
       logo? : string;
       stacks? : string[];
       about : string;
       linkRepository? : string;
       linkProject? : string;
    }
}

const CardProject = ({data}: Props) => {
    const hrefStyle = "border hover:bg-cd700 py-1 rounded-full font-bold text-center w-[7rem]"
  return (
    <section className='card bg-cd800 gap-2 flex flex-col justify-center items-center'>
        <img src={data.image} className={"w-[20rem] border-[2px] border-cd700 border-dashed"}/>
        <h1 className='font-bold text-lg'>{data.title}</h1>
        <p className='text-justify'>{data.about}</p>
        <div className='flex  w-full gap-2 justify-start'>
            <a href="" className={hrefStyle}>Repository</a>
            <a href="" className={hrefStyle}>Demo</a>
        </div>
        <div>
            <h1 className='font-bold mb-2'>Skill</h1>
            <ul className='w-full flex gap-2'>
                {
                    data.stacks?.map((stack,i)=>(
                        <li className='border text-center border-dashed p-1 mb-2'>{stack}</li>
                    ))
                }
            </ul>
        </div>
    </section>
  )
}

export default CardProject