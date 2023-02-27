import Link from 'next/link';
import React from 'react';
import { Cursor,useTypewriter } from 'react-simple-typewriter';



import BackgroundCircle from './BackgroundCircle';
type Props = {}

export default function Hero({}: Props) {
    const [text , count] =useTypewriter({
        words:[
            "Hi I'm Akhilesh S Pujar",
            "Guy who-Loves-coffe.tsx",
            "<ButLovesToDevelopWebsites/>"
        ],
        loop:true,
        delaySpeed:2000,
    });
  return (
    <div className='flex flex-col h-screen items-center justify-center
    text-center'>
       <BackgroundCircle/>
       <img
       src="https://scontent.fblr20-2.fna.fbcdn.net/v/t39.30808-6/293319678_1770997416582603_6350480388994977954_n.jpg?stp=dst-jpg_p960x960&_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_ohc=IlH_sggj2QwAX8xjRUY&_nc_ht=scontent.fblr20-2.fna&oh=00_AfAZKvfg2AesYxl0cEZGXUGCxfvANVC4SF_GD8AyPDG_7Q&oe=63FF8A90"
       className='relative rounded-full h-32 w-32 mx-auto object-cover '
        
       alt="banner"/>
        
       <div className='z-10'>
       <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'
       >Software Engineer</h2>
        <h1 className='text-2xl lg:text-2xl font-semibold px-10'>
        <span className='mr-3'>{text}</span>
        <Cursor cursorColor="#F7AB0A"/>
        </h1>
        <div className='pt-4'>
            <Link href="#about">
            <button className='heroButton'>About</button>
            </Link>
            <Link href="#experience">
            <button className='heroButton'>Experience</button>
            </Link>
            <Link href="#skills">
            <button className='heroButton'>Skills</button>
            </Link>
            <Link href="#projects">
            <button className='heroButton'>Projects</button>
            </Link>
      
        </div>
        {/* <About/> */}
       
       </div>
 
    </div>
  );
}

