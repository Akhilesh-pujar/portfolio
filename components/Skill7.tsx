import React from 'react';
import {motion} from 'framer-motion';

type Props = {
  directionLeft ?: boolean;
};

function Skill7({directionLeft}: Props) {
  return (
  <div className='group relative flex cursor-pointer'>
<motion.img
initial={{
  x: directionLeft ? -200 :200,
  opacity:0,
}}
transition={{duration:1}}
whileInView={{opacity:1, x:0}}
 className="  rounded-full border border-gray-500 object-cover w-24 h-24 
 xl:w-22 xl:h-22 filter group-hover:grayscale transition-300 ease-in-out"
src='https://cdn-icons-png.flaticon.com/512/6132/6132222.png'

/>
<div className='absolute opacity-0 group-hover:opacity-80 transition-300
ease-in-out group-hover:bg-white h-24 w-24 md:h-25 md:w-25 xl:w-22 xl:h-22
rounded-full '>
  <div className='flex items-center justify-center h-full'>
    <p className='text-2xl font-bold text-black opacity=100'>75%</p>
  </div>
</div>

 

    </div>

  )
}

export default Skill7