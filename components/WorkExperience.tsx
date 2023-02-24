import React from 'react'
import {motion} from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
import ExperienceCard from './ExperienceCard';
type Props = {}

function WorkExperience({}: Props) {
  return (

    <div>
    <motion.div 
     initial={{opacity:0,}}
     whileInView={{ opacity:1, x:0}}
     transition={{duration:1.5,}}
    
    className='h-screen bg-[rgba(36,36,36)] flex relative overflow-hidden
       mt-[-100px]flex-col text-left md:flex-row max-w-full px-10  justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px]'>
        Experience</h3>
        <div className='w-full flex space-x-5 overflow-x-scroll snap-x snap-mandatory'>
          <ExperienceCard/>
          <ExperienceCard/>
          <ExperienceCard/>

          {/* Experience card */}

        </div>
    </motion.div>
    
    </div>

  )
}

export default WorkExperience