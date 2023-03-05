import React from 'react'
import {motion} from 'framer-motion';
import Image from 'next/image';




type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
    initial={{
        opacity:0,
       }}
       whileInView={{ opacity:1, x:0}}
       transition={{duration:1.2,}}
    className='min-h-screen flex flex-col relative text-center-left md:text-left md:flex-row
    px-10 justify-evenly mt-[-100px] w-auto bg-[rgba(36,36,36)] mx-auto items-center
    '>
        <h3 className='absolute top-24 uppercase tracking-[20px]'>About</h3>
        
       <motion.img
       initial={{
        x:-200,
        opacity:0,

       }}
       transition={{
        duration:1.2,
       }}
        whileInView={{ opacity:1, x:0}}
        viewport={{once:true}}
        
       src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero_banner.8f50ce74.jpeg&w=640&q=75"
        className='mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-95 xl:w-[350px] xl:h-[350px]'   
       />
      
       <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>Here is a <span>little background</span></h4>
       </div>
       <p className='text-sm'>
        I'm Akhilesh S Pujar I'm from kalaburgi,karnataka currently pursuing my degree in IIIT Pune as Electronics and Communication Engineer I'm in final year of my college .I've been coding for over 1 year now.As a Frontend developer i got internship opportunity
           in Simmi Foundation and i got nice work culture over there and learned man things from this internship 
         .Also I have done 250+ questions
        on DSA in leet code as well as codestudio you can visit my coding profile .
       </p>

    </motion.div>
  );
}

