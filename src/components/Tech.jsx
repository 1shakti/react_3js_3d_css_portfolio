import React from 'react';
import { BallCanvas } from './canvas'; 
import SectionWrapper from '../hoc/SectionWrapper';
import { technologies } from '../constants';

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology, index) => (
        <div className='w-20 h-20 m-4' key={index}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "")