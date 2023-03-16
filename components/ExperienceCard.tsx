import React from 'react'
import{motion} from 'framer-motion';
import Image from 'next/image';
import react from  '../assets/react.png';
import js from '../assets/js.png';
import tail from '../assets/tail.png';
type Props = {}

export default function ExperienceCard({}: Props) {
  return (
  <article className='flex flex-col 
  rounded-lg items-center space-y-2
   mt-[190px]
  flex-shrink-0 
  w-[500px] 
  md:w-[600px] xl:w-[800px]  
  snap-center bg-[#292929] p-10
  hover:opacity-100 
  opacity-40 cursor-pointer 
  transition-opacity duration-200 '>
  <motion.img 
  initial={{
    y:-100,
    opacity:0,
    
  }}
  transition={{duration:1.2}}
  whileInView={{opacity:1 , y:0}}
  viewport={{once:true}}
  src='https://simmifoundation.org/home/images/logo.png'
  className='w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px]
   object-cover object-center
  '
  />

  <div className='px-0 md:px-10'>
    <h4 className='text-4xl font-light'>Frontend Developer</h4>
    <p className='font-bold text-2xl mt-1'>Simmi Foundation</p>
    <div className='flex space-x-2 my-2'>
        <Image
        className='h-10 w-10 rounded-full'
        src={react}
        alt="techiknow"
        />
       <Image
        className='h-10 w-10 rounded-full'
        src={js}
        alt="techiknow"
        />
        <Image
        className='h-10 w-10 rounded-full'
        src={tail}
        alt="techiknow"
        />
        {/* tech used */}
    </div>
    <p className='uppercase py-5 text-gray-300'>01-2023 - present</p>
    <ul className='list-disc space-y-2 ml-5 text-lg'>
    
        <li>Added a feature like posting a blog </li>
        <li>Styled the front end using scss</li>
         <li> Learned a lot about Material ui, Chakra ui.</li>
        <li>This internship has helped me develop my Skills on React.js and <br/>communication abilities</li>
    </ul>
  </div>
  </article>
  );
}

