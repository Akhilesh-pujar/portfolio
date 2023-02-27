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
       src="https://scontent.fblr20-3.fna.fbcdn.net/v/t39.30808-6/217680254_1516387568710257_7315332803292223119_n.jpg?stp=dst-jpg_p843x403&_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=O2D04wU2WJQAX9tV6oH&_nc_ht=scontent.fblr20-3.fna&oh=00_AfCMzrPy23jhtAckER6hVIZYZUNOAW8DU3gqorEW7S60zg&oe=63FEB671"
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

