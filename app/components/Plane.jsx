import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'

function Plane({isRotating , ...props}) {
    const ref = useRef()
    const {scene , animations} = useGLTF('3d/plane.glb')
    const {actions} = useAnimations(animations , ref)

    useEffect(()=> {
        if(isRotating){
        actions['Take 001'].play();
        }
        else{
            actions['Take 001'].stop();

        }

    },[actions , isRotating])
    return (
    <mesh {...props} ref={ref}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Plane