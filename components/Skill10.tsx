


import React from 'react';
import {motion} from 'framer-motion';

type Props = {
  directionLeft ?: boolean;
};

function Skill10({directionLeft}: Props) {
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
src='https://e7.pngegg.com/pngimages/72/936/png-clipart-sass-cascading-style-sheets-preprocessor-less-postcss-meng-miscellaneous-text-thumbnail.png'

/>
<div className='absolute opacity-0 group-hover:opacity-80 transition-300
ease-in-out group-hover:bg-white h-24 w-24 md:h-25 md:w-25 xl:w-22 xl:h-22
rounded-full '>

</div>

 

    </div>

  )
}

export default Skill10