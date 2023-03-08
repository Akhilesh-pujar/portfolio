import React from 'react';
import {motion} from 'framer-motion';

type Props = {};

function Skill2({}: Props) {
  return (
  <div className='group relative flex cursor-pointer'>
<motion.img
  initial={{ opacity:0, y:-200}}
  transition={{duration:1}}
  whileInView={{opacity:1, y:0}}
 className="  rounded-full border border-gray-500 object-cover w-24 h-24 
 xl:w-22 xl:h-22 filter group-hover:grayscale transition-300 ease-in-out"
src='https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png'

/>
<div className='absolute opacity-0 group-hover:opacity-80 transition-300
ease-in-out group-hover:bg-gray-300 h-24 w-24 md:h-25 md:w-25 xl:w-22 xl:h-22
rounded-full '>

</div>

 

    </div>

  )
}

export default Skill2