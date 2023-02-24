import React from 'react';
import {motion} from 'framer-motion';

type Props = {}

function BackgroundCircle({}: Props) {
  return (
    <motion.div
    initial={{
        opacity:0,

    }}
    animate={{
        scale:[1,2,2,3,1],
        opacity:[0.1,0.2,0.4,0.8, 0.1,1.0],
        borderRadius:["20%","20%","50%","80%","20%"],
    }}
    transition={{
        duration:2.5,
    }}

    className='realtive flex justify-center items-center'>

        <div className=' absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52
        animate-ping
        ' />
         <div className='rounded-full  border border-[#333333]  h-[400px] w-[400px] absolute
        mt-52'/>
        <div className='rounded-full absolute border border-[#333333] h-[500px] w-[500px]
         mt-52' />
        {/* <div className='rounded-full border border-[#F7AB0A] opacity-20 
        h-[650px] w-[650px] mt-52 animate-pulse' /> */}

        {/* <div className='rounded-full  border border-[#333333]  h-[800px] w-[800px] absolute
         mt-52'/>  */}
    </motion.div>
  );
}

export default BackgroundCircle;