import { arrow } from '@/public/icons'
import Link from 'next/link'
import React from 'react'

const InfoBox = ({text , link , btnText}) =>(
    <div className='info-box bg-white'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link className='neo-brutalism-white neo-btn' href={link}>
            {btnText}
            <img src='icons/arrow.svg' className='w-4 h-4 object-contain' alt="icon"/>
        </Link>
    </div>
)

const renderContent = {
    1:(
        <h1 className=' sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5 '>
            Hi, I am <span className='font-semibold'>Ehsan</span> <br />
            a Software Developer From Iran
        </h1>
    ),
    2:
       ( <InfoBox
        text='worked with many companies and picked up many skills'
        link = '/about'
        btnText= ' Learn more'
        />)
    ,
    3:(
        ( <InfoBox
            text='worked with many companies and picked up many skills'
            link = '/project'
            btnText= 'visit my portfolio'
            />)
    ),
    4:(
        ( <InfoBox
            text='worked with many companies and picked up many skills'
            link = '/contact'
            btnText= "let's talk"
            />)
    ),
}


function HomeInfo( {currentStage}) {
  
    return  renderContent[currentStage] || null
}

export default HomeInfo