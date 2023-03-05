import React from 'react'
import {motion} from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import ExperienceCard1 from './ExperienceCard1';
type Props = {}

function WorkExperience({}: Props) {
  return (

    <div>
    <motion.div 
     initial={{opacity:0,}}
     whileInView={{ opacity:1, x:0}}
     transition={{duration:1.5,}}
    
    className='container bg-[rgba(36,36,36)] flex relative overflow-hidden
       mt-[0px]flex-col text-left md:flex-row max-w-full px-10  justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px]  text-2xl'>
        Experience</h3>
        <div className='w-full mt-[200px] mb-[100px] 
        flex space-x-5 overflow-x-scroll snap-x snap-mandatory 
         scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]
        '>
          <ExperienceCard/>
          
      

          

          {/* Experience card */}

        </div>
    </motion.div>
    
    </div>

  )
}

export default WorkExperience