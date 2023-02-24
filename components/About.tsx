import React from 'react'
import {motion} from 'framer-motion';

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
    initial={{
        opacity:0,
       }}
       whileInView={{ opacity:1, x:0}}
       transition={{duration:1.2,}}
    className='h-screen flex flex-col relative text-center-left md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mt-[-100px] w-auto bg-[rgba(36,36,36)] mx-auto items-center
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
       src="https://images.unsplash.com/photo-1603169130499-04f370dae46d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        className='mb-20 md:mb-0 flex-shrink-0 w-56 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'   
       />
       <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>Here is a <span>little background</span></h4>
       </div>
       <p className='text-sm'>
        I'm Akhilesh S Pujar I've been coding for over 3 years now.As a Frontend developer I've have worked
        as frontend developer in start ups and in NGO's to help build and scale their companies 
        . Along the journey I realised my passion existed in developing as many websites as I could.Also I have done 250+ questions
        on DSA in leet code as well as codestudio,that's it.
       </p>

    </motion.div>
  );
}

