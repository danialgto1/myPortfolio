import React from 'react'
import { projects } from '@/public/constant'
import Link from 'next/link'
import CTA from '../components/CTA'

export default function project() {
  return (
    <section className='max-container'>
    <h1 className='head-text'>
      My <span className="blue-gradient_text font-semibold drop-shadow">Projects</span>

    </h1>
    <div className='mt-5 flex flex-col gap-3 text-slate-500'>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit sit deleniti aliquid quasi cum inventore repellendus nisi accusantium perspiciatis, corrupti facere? Animi velit cum nam voluptas debitis maxime, qui neque!
      </p>
    </div>
    <div className='flex flex-wrap my-20 gap-16'>
      {projects.map((project , index)=>(
        <div className='lg:w-[400px] w-full' key={index} >
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`}/>
              <div className='btn-front rounded-xl flex justify-center items-center'>
              <img src={`icons/${project.iconUrl}.svg`} alt='project icon'
              className='w-1/2 h-1/2 object-contain' />
            </div>
            </div>
            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>  
              <p className='mt-2 text-slate-500'>
                  {project.description}
              </p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                className='font-semibold text-blue-600' 
                href={project.link}
                rel='noopener noreferrer' >
                  Live Link
                </Link>
                <img src='icons/arrow.svg' alt="arrow" className='w-4 h-4 object-contain' />
              </div>
            </div>
            
        </div>
      ))}
    </div>
    <hr className='border-slate-200' />
    <CTA />
    </section>
  )
}
