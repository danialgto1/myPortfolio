'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Loader from './components/Loader'
import { Island } from './components/Island'
import Sky from './components/Sky'
import Bird from './components/Bird'
import Plane from './components/Plane'
import HomeInfo from './components/HomeInfo'


export default function Page() {
    const audioRef = useRef(null)
    const [isPlayingMusic, setIsPlayingMusic] = useState(0)
    const [isRotating, setIsRotating] = useState(false)
    const [currentStage, setCurrentStage] = useState(null)

    useEffect(()=>{
        setCurrentStage(1)
        if(typeof Audio !== 'undefined'){
            audioRef.current = new Audio('sakura.mp3')
            audioRef.current.volume = 0.4
            audioRef.current.loop= true
        
        if(isPlayingMusic){
            audioRef.current.play().catch((e)=>{
                console.log(e)
            });
        }
        return() => {
            audioRef.current.pause()
        }
        }else{
            console.log('Cannot play audio in this environment')
        }
    },[isPlayingMusic])


    const adjustIslandForScreenSize = () => {
        let rotation = [0.1 , 4.7 , 0]
        let screenScale=null
        let screenPosition = [0,-6.5 , -43];
        if(typeof window !== 'undefined' && window.innerWidth <768){
            screenScale = [0.9 , 0.9 , 0.9];
        } else {
            screenScale = [1,1,1];
        }
        return [ screenScale , screenPosition , rotation]
    }
    const adjustPlaneForScreenSize = () => {
        let screenPosition, screenScale
        if( typeof window !== 'undefined' && window.innerWidth <768){
            screenScale = [1.5 , 1.5 , 1.5];
            screenPosition = [9,-1.5,0]
        } else {
            screenScale = [3 , 3 , 3];
            screenPosition = [0,-4,-4]
        }
        return [ screenScale , screenPosition ]
    }

    const [planeScale , PlanePosition] = adjustPlaneForScreenSize();
    const [islandScale , islandPosition , islandRotation] = adjustIslandForScreenSize();
    return (
    <section className='w-full h-screen relative'>
        <div className=' absolute top-28 left-0 right-0 z-10 flex items-center justify-center cursor-help'>
            {currentStage && <HomeInfo currentStage={currentStage}/>}
        </div>
        <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{near:0.1 , far:1000}}>
            
            <Suspense fallback={<Loader />}>
            <directionalLight position={[1,1,1]} intensity={2}/>
            <ambientLight intensity={0.5}/>
            <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' intensity={1} />
            
            <Sky 
            isRotating={isRotating} />
            <Bird />

            <Island 
            position = {islandPosition}
            scale = {islandScale}
            rotation = {islandRotation}
            isRotating = {isRotating}
            setIsRotating = {setIsRotating}
            setCurrentStage = {setCurrentStage}
                />    
            <Plane 
            isRotating= {isRotating}
            scale = {planeScale}
            position={PlanePosition}
            rotation={[0,20,0]}
            />
            </Suspense>
        </Canvas>
        {audioRef && <div className=' absolute bottom-2 left-2'>
            <img src={isPlayingMusic ? 'icons/soundon.png' : 'icons/soundoff.png'} alt="sound" className='w-10 h-10 cursor-pointer object-contain' 
            onClick={()=> setIsPlayingMusic(!isPlayingMusic) }/>
        </div>}
    </section >
  )
}

