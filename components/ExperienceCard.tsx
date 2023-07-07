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
  rounded-xl shadow-lg hover:shadow-blue-400 items-center space-y-2
   mt-[200px] 
   xl:mt-[250px]
  flex-shrink-0 
  w-[600px] 

  md:w-[700px] md:h-[810px] xl:w-[700px] xl:h-[900px] 
  snap-center bg-[#292929] p-5
  hover:opacity-100 
  opacity-40 cursor-pointer 
  transition-opacity duration-200 
  '>
  <motion.img 
  initial={{
    y:-100,
    opacity:0,
    
  }}
  transition={{duration:1.2}}
  whileInView={{opacity:1 , y:0}}
  viewport={{once:true}}
  src='https://simmifoundation.org/home/images/logo.png'
  className='w-32 h-32 rounded-full md:rounded-full xl:w-[120px] xl:h-[120px]
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
    <p className='uppercase py-0 mt-0 text-gray-300'>01-2023 - present</p>
    <ul className='list-disc space-y-2 ml-5 text-lgv p-10 -mt-10 text-center font-light'>
  
        <li>Worked on various projects during the internship, ranging from small-scale websites to large-scale web applications, and gained extensive experience in front-end development technologies such as  React,Next js and for backend mongoose, Rest Api. </li>
        <li>Proactively identified and resolved technical issues, including debugging and troubleshooting, to ensure smooth functioning of web applications.</li>
         <li> Developed a deep understanding of user experience and user interface design, and implemented design elements that improved the overall usability and functionality of the web applications.</li>
        <li>Collaborated with a team of experienced developers and designers to ensure high-quality delivery of projects within the given timelines.</li>
        <li>Demonstrated excellent communication and interpersonal skills while working with cross-functional teams, and consistently met  project expectations.</li>
    </ul>
  </div>
  </article>
  );
}

