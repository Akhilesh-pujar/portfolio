import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';

import aboutfinal from 'assets/aboutfinal.jpg'



type Props = {}

export default function About({ }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.8 }}
      className='h-screen flex flex-col relative text-center-left md:text-left md:flex-row
    px-5 justify-evenly max-w-9xl w-auto  mx-auto items-center
    '>
      <h3 className='absolute uppercase tracking-[20px] text-2xl text-gray-500 sm: top-16'>About</h3>

      <Image
        src={aboutfinal}
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover 
        md:rounded-lg md:w-50 md:h-50 xl:w-[500px] xl:h-[600px]  shadow-lg shadow-blue-500 hover:shadow-red-300 '
        alt='about pic' />

      <div className='space-y-10 px-0 md:px-10 xl:text-center'>
        <h4 className='text-4xl font-semibold font-serif underline  cursor-pointer shadow-md '>Biography </h4>
      </div>
      <p className='text-base font-serif text-left'>
        Hello, my name is Akhilesh S Pujar, and I am a Full developer with over 1 years of experience in developing complex web applications. I am skilled in a variety of programming languages, including JavaScript, C++, and
        have experience working with various web frameworks and databases. Throughout my College, I have successfully delivered several projects on time and within budget, and have received recognition from my Teachers and faculty for my attention
        to detail and problem-solving skills.
        I am passionate about creating innovative and efficient solutions to complex problems, and am always eager to learn and grow in my field .
      </p>

    </motion.div>
  );
}

