import React from 'react'
import{motion} from 'framer-motion';
import Image from 'next/image';
import react from  '../assets/react.png';
import js from '../assets/js.png';
import tail from '../assets/tail.png';

type Props = {}

function ExperienceCard1({}: Props) {
  return (
  <article className='flex flex-col rounded-lg items-center space-y-2
  flex-shrink-0 w-[500px] md:w-[500px] xl:w-[550px]  snap-center bg-[#292929] p-10
  hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
  <motion.img 
  initial={{
    opacity:0,
    y:-100
  }}
  transition={{duration:1.7}}
  whileInView={{opacity:1 , y:0}}
  viewport={{once:true}}
  src='https://www.unschool.in/static/Unschool%20Logo%20Horizontal%20White%20(1)-a4913f0c391a347aa53acfa994243cb4.png'
  className='w-42 h-42 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px]'
  />

  <div className='px-0 md:px-10'>
    <h4 className='text-4xl font-light'>Community Leader</h4>
    <p className='font-bold text-2xl mt-1'>UnSchool</p>
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
    <p className='uppercase py-5 text-gray-300'>Started Work 01-06-2021 Ended 20-07-2021</p>
    <ul className='list-disc space-y-4 ml-5 text-lg'>
        <li>My role here is as a data manager and sale picth</li>
        <li> Helped to increase their sales </li>
        <li> This internship has helped me develop my sales and communication abilities</li>
        <li> Held meetings, gained additional insight into the inside operations of the way company is handled</li>
       
    </ul>
  </div>
  </article>
  );
}

export default ExperienceCard1