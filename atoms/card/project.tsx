import React from 'react'

type TProps = {
    title : string;
    name : string;
    image : string;
    logo? : string;
    stacks? : string[];
    about : string;
    linkRepository? : string;
    linkProject? : string;
}

const style = {
    href :  "border hover:bg-cd700 py-1 rounded-full font-bold text-center w-[7rem]"
}

const Project = (props: TProps) => {
    const {title, name, image, logo, stacks, about, linkProject, linkRepository} = props
    return (
    <section className='card bg-cd800 gap-2 flex flex-col justify-center items-center'>
        <h1 className='font-bold text-lg'>{title}</h1>
        <img src={image} className={"w-[20rem] border-[2px] border-cd700 border-dashed"}/>
        <p className='text-justify'>{about}</p>
        <div className='flex  w-full gap-2 justify-start'>
            <a href="" className={style["href"]}>Repository</a>
            <a href="" className={style["href"]}>Demo</a>
        </div>
        <div>
            <h1 className='font-bold mb-2'>Skill</h1>
            <ul className='w-full flex gap-2'>
                {
                    stacks?.map((stack,i)=>(
                        <li key={i} className='border text-center border-dashed p-1 mb-2'>{stack}</li>
                    ))
                }
            </ul>
        </div>
    </section>
  )
}

export default Project