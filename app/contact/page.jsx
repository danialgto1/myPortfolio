'use client'
import React, { Suspense, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber'
import { Fox } from '../components/Fox'
import { Loader } from '@react-three/drei'
import useAlert from '../components/hooks/useAlert'
import Alert from '../components/Alert'


function Page() {
  const formRef = useRef()
  const [form, setForm] = useState({name:'' , email:'', message:''})
  const  [isLoading, setIsLoading] = useState(false)
  const [currentAnimation, setCurrentAnimation] = useState('idle')
  const { alert , showAlert,hideAlert } =useAlert()


  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }
  const handleFocus = () => { 
    setCurrentAnimation('walk')
   }
  const handleBlur = () => {
    setCurrentAnimation('idle')
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true)
    setCurrentAnimation('hit')
    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICEID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATEID,
      {
        from_name:form.name,
        to_name:'Ehsan',
        from_email:form.email,
        to_email:'danialgto@gmail.com',
        message:form.message
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLICKEY
    ).then(
      ()=>{
        setIsLoading(false);
        showAlert({show:true , text:"message sent successfully" , type:'success'})
        setTimeout(()=>{
          setForm({name:'',email:'',message:''});
          setCurrentAnimation('idle');
          hideAlert();
        },[3000])
      }
    ).catch((e)=>{
      setIsLoading(false);
      showAlert({show:true , text:"I didn't receive your message" , type:'danger'})

      setCurrentAnimation('idle')
      console.log(e)
    })

  }

  return (
    <section className='relative flex lg:flex-row flex-col max-container h-[100vh] '>
      {alert.show && <Alert {...alert}/>}
      <div className='flex-1 min-w-[50%] flex flex-col' >
        <h1 className='head-text'>
          Get in Touch
          </h1>

          <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className='w-full flex flex-col gap-7 mt-14 '
          >
            <label htmlFor="" className='text-black-500 font-semibold'>
               Name
               <input 
               type="text"
               name="name"
               className='input'
               placeholder='John'
               required
               value={form.name}
               onChange={handleChange} 
               onFocus={handleFocus}
               onBlur={handleBlur}/>
               </label>

               <label htmlFor="" className='text-black-500 font-semibold'>
               email
               <input 
               type="email"
               name="email"
               className='input'
               placeholder='John@gmail.com'
               required
               value={form.email}
               onChange={handleChange} 
               onFocus={handleFocus}
               onBlur={handleBlur}/>
               </label>

               <label htmlFor="" className='text-black-500 font-semibold'>
               Your message
               <textarea 
               type="text"
               name="message"
               className='input'
               placeholder='Let me know how i can help you'
               required
               value={form.message}
               onChange={handleChange} 
               onFocus={handleFocus}
               onBlur={handleBlur}/>
               </label>
              
              <button
              type='submit'
              className='btn'
              onFocus={handleFocus}
              onBlur={handleBlur}
              >
                {isLoading? 'Sending...' : 'send message'}
              </button>
          </form>
      </div>
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
      <Canvas 
        className={`w-full h-screen bg-transparent`}
        camera={{near:0.1,
        far:1000,
        fov:35,

        
        }}>
            <Suspense fallback={<Loader />}>
            <directionalLight position={[0,0,1]} intensity={2.5}/>
            <ambientLight intensity={0.5}/>
            <Fox
            currentAnimation={currentAnimation}
            position={[0,0.35,0]}
            rotation={[0,-0.6,0]}
            scale={[0.35,0.35,0.35]}
            />
            
            </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Page