import React from 'react'
import { Html, useProgress } from '@react-three/drei'

const CanvasLoader = () => {

  const { progress } = useProgress();

  return (
    <Html>
      <span className=' canvas-load ' ></span>
      <p
        className='text-[14px] text-[#f1f1f1]-800 mt-40'
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  )
}

export default CanvasLoader