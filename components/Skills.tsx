import React from 'react';
import{motion} from 'framer-motion';
import Skill from './Skill';

type Props = {}

const Skills = (props: Props) => {
  return (
    <div>
         <motion.div
         initial={{opacity:0}}
         whileInView={{opacity:1}}
         transition={{duration:1.5}}
         
         className='flex flex-col relative text-center justify-center
          mx-auto items-center md:text-left xl:flex-row max-w-[200px] xl:px-10 xl:space-y-0' >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
         Skills
        </h3>
    <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 
    text-sm'> 
    Hover<br/> over a skill <br/>for currency proffeciency</h3>
    <div className='grid grid-cols-4 gap-5'>
      <Skill/>
      <Skill/>
      <Skill/>
      <Skill/>
    </div>
    </motion.div>



    </div>
   
  )
}

export default Skills