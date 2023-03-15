import React from 'react'
import {motion} from 'framer-motion';
import Image from 'next/image';




type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
       initial={{opacity:0,}}
       whileInView={{ opacity:1 }}
       transition={{duration:1.5}}
    className='h-screen flex flex-col relative text-center-left md:text-left md:flex-row
    px-5 justify-evenly max-w-9xl w-auto  mx-auto items-center
    '>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl text-gray-500'>About</h3>
        
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
        
       src="https://scontent.fblr4-4.fna.fbcdn.net/v/t39.30808-6/293319678_1770997416582603_6350480388994977954_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_ohc=GmgFUDHmY30AX-k4XrN&_nc_ht=scontent.fblr4-4.fna&oh=00_AfC3FcH1rNIczimmRC_Hyar96UxMBmDJ5oWBTkc1RjHv7g&oe=64174590"
        className='mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-95 xl:w-[350px] xl:h-[350px]'   
       />
      
       <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>Here is a <span>little background</span></h4>
       </div>
       <p className='text-base'>
        I'm Akhilesh S Pujar I'm from kalaburgi,karnataka currently pursuing my degree in IIIT Pune as Electronics and Communication
         Engineer I'm in final year of my 
        college .I've been coding for over 1 year now.As 
        a Frontend developer i got internship opportunity
           in Simmi Foundation and i got nice work culture over there and learned man things from this internship 
         .Also I have done 250+ questions
        on DSA in leet code as well as codestudio you can visit my coding profile .
       </p>

    </motion.div>
  );
}

