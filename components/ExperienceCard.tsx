import React from 'react'
import{motion} from 'framer-motion';

type Props = {}

function ExperienceCard({}: Props) {
  return (
  <article className='flex flex-col rounded-lg items-center space-y-2
  flex-shrink-0 w-[600px] md:w-[500px] xl:w-[550px]  snap-center bg-[#292929] p-10
  hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
  <motion.img 
  initial={{
    opacity:0,
    y:-100
  }}
  transition={{duration:1.7}}
  whileInView={{opacity:1 , y:0}}
  viewport={{once:true}}
  src='https://simmifoundation.org/home/images/logo.png'
  className='w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px]'
  />

  <div className='px-0 md:px-10'>
    <h4 className='text-4xl font-light'>Frontend Developer</h4>
    <p className='font-bold text-2xl mt-1'>Simmi Foundation</p>
    <div className='flex space-x-2 my-2'>
        <img
        className='h-10 w-15 rounded-full'
        src='https://cdn.worldvectorlogo.com/logos/react-1.svg'
        alt="techiknow"
        />
       <img
        className='h-10 w-10 rounded-full'
        src='https://e7.pngegg.com/pngimages/602/440/png-clipart-javascript-open-logo-number-js-angle-text.png'
        alt="techiknow"
        />
        <img
        className='h-10 w-10 rounded-full'
        src='https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png'
        alt="techiknow"
        />
        {/* tech used */}
    </div>
    <p className='uppercase py-5 text-gray-300'>Started Work 2023-01 Ended 2023-06</p>
    <ul className='list-disc space-y-4 ml-5 text-lg'>
        <li> This internship has helped me develop my Skills on React.js and communication abilities</li>
        <li>Added a feature like posting a blog </li>
        <li>Styled the front end using scss</li>
         <li> Learned a lot about Material ui, Chakra ui.</li>
        <li>optimized the frontend part</li>
    </ul>
  </div>
  </article>
  );
}

export default ExperienceCard