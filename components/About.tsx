import React from 'react'
import {motion} from 'framer-motion';
import Image from 'next/image';

import aboutfinal from 'assets/aboutfinal.jpg'



type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
       initial={{opacity:0,}}
       whileInView={{ opacity:1 }}
       transition={{duration:1.8}}
    className='h-screen flex flex-col relative text-center-left md:text-left md:flex-row
    px-5 justify-evenly max-w-9xl w-auto  mx-auto items-center
    '>
        <h3 className='absolute uppercase tracking-[20px] text-2xl text-gray-500 sm: top-16'>About</h3>
        
       <Image
       src={aboutfinal}
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover 
        md:rounded-lg md:w-50 md:h-50 xl:w-[500px] xl:h-[600px] shadow-md shadow-blue-500 '   
       alt='about pic'/>
      
       <div className='space-y-10 px-0 md:px-10 xl:text-center'>
        <h4 className='text-4xl font-semibold  cursor-pointer shadow-md shadow-red-500'>Biography </h4>
       </div>
       <p className='text-base'>
        I'm Akhilesh S Pujar I'm from kalaburgi,karnataka currently pursuing my degree in IIIT Pune as Electronics and Communication
         Engineer I'm in final year of my 
        college .I've been coding for over 1 year now.As 
        a Frontend developer i got internship opportunity
           in Simmi Foundation  
         .Do check my coding profile for my proficiency in DSA .
       </p>

    </motion.div>
  );
}

