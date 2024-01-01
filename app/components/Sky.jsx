import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'

export default function Sky({isRotating}) {
    const ref = useRef()
    const sky = useGLTF('3d/sky.glb')
    useFrame( (_,delta)=>{
      if(isRotating){
        ref.current.rotation.y += 0.15 * delta
      }
    })
    return (
    <mesh > 
        <primitive object={sky.scene} ref = {ref} />
    </mesh>
  )
}
