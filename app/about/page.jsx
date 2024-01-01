'use client'
import { skills , experiences} from '@/public/constant'
import { VerticalTimeline , VerticalTimelineElement } from 'react-vertical-timeline-component'
import CTA from '../components/CTA'

function Page() {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I&apos;m <span className="blue-gradient_text font-semibold drop-shadow">Ehsan</span>

      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit sit deleniti aliquid quasi cum inventore repellendus nisi accusantium perspiciatis, corrupti facere? Animi velit cum nam voluptas debitis maxime, qui neque!
        </p>
      </div>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>
          My Skills
        </h3>
        <div className="mt-16 flex flex-wrap gap-12 ">
          {skills.map((skill) => (
            <div key={skill.name} className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl'/>
              <div className='btn-front rounded flex justify-center items-center'>
                <img
                src={`icons/${skill.imageUrl}.svg`}
                alt={skill.name}
                className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className=' subhead-text'>
          Work Experience
          </h3>
          <div className='mt-5 flex flex-col gap-3 text-slate-500'>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit sit deleniti aliquid quasi cum inventore repellendus nisi accusantium perspiciatis, corrupti facere? Animi velit cum nam voluptas debitis maxime, qui neque!
            </p>
          </div>
          <div className='mt-12 flex'>
            <VerticalTimeline>
            {experiences.map((experience  )=>(
              <VerticalTimelineElement
              key={experience.company_name}
              date={experience.date}
              icon={
                <div className='flex justify-center items-center h-full w-full'>
                  <img src={`./images/${experience.icon}.png`}
                  className='w-[60%] h-[60%] object-contain'
                  />
                </div>
              }
              contentStyle={{
                borderBottom:'8px',
                borderStyle:'solid',
                borderBottomColor: experience.iconBg,
                boxShadow:'none'
              }}
              iconStyle={{
                background:experience.iconBg
              }}
              visible={true}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p className='text-black-500 font-medium font-base' style={{margin:0}}>
                    {experience.company_name} 
                  </p>
                </div>
                <ul className='my-5 list-disc ml-5 space-y-2'>
                  
                  {experience.points.map((point ,index)=>(
                    <li className='text-black-500/50 font-normal pl-1 text-sm'  key={index}>
                      {point}
                    </li>
                  ))}

                </ul>
              </VerticalTimelineElement>
            ))}
            
            </VerticalTimeline>            
          </div>

      </div>
      <hr className='border-slate-200' />
      <CTA />
    </section>
  )
}

export default Page