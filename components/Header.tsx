import React from 'react';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import { Social } from '@/typing';

type Props = {
  social:Social[];
};

export default function Header({social}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 
    xl:items-center'>
      <motion.div 
      initial={{
        x:-500,
        opacity:0,
        scale:0.5
      }} 
      animate={{
        x:0,
        opacity:1,
        scale:1
      }}
      transition={{
        duration:1.5,
      }}
      
      className='flex flex-row items-center'>
        {/*--------------Social Icons--------------*/}

        <SocialIcon url="https://www.linkedin.com/in/akhilesh-pujar-70aa26212/" 
        bgColor='transparent'
        fgColor='gray'
        />
        

        <SocialIcon url="https://github.com/Akhilesh-pujar" 
        bgColor='transparent'
        fgColor='gray'
        />

        <SocialIcon url="https://www.instagram.com/akhileshspujar/" 
        bgColor='transparent'
        fgColor='gray'
        />

        <SocialIcon url="https://leetcode.com/Akhilesh_pujar/" 
        bgColor='transparent'
        fgColor='gray'
        />

      </motion.div>
   
      <motion.div 
            initial={{
              x:500,
              opacity:0,
              scale:0.5
            }} 
            animate={{
              x:0,
              opacity:1,
              scale:1
            }}
            transition={{
              duration:1.5,
            }}
            
      
      
      className='flex flex-row items-center text-gray-300 cursor-pointer'>
        
        
        <SocialIcon
        className='cursor-pointer'
        network='email'
        fgColor='gray'
        bgColor='transparent'
        
        />
        <Link href="#contact">
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p>
        </Link>
        

      </motion.div>

    </header>
  )
}

