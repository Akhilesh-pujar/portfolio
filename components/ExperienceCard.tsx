import React from 'react'
import{motion} from 'framer-motion';

type Props = {}

function ExperienceCard({}: Props) {
  return (
  <article className='flex flex-col rounded-lg items-center space-y-7
  flex-shrink-0 w-[300px] md:w-[600px] xl:w-[700px]  snap-center bg-[#292929] p-10
  hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
  <motion.img 
  initial={{
    opacity:0,
    y:-100
  }}
  transition={{duration:1.7}}
  whileInView={{opacity:1 , y:0}}
  viewport={{once:true}}
  src='https://images.unsplash.com/photo-1595327656903-2f54e37ce09b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
  className='w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px]'
  />

  <div className='px-0 md:px-10'>
    <h4 className='text-4xl font-light'>Frontend Developer</h4>
    <p className='font-bold text-2xl mt-1'>Simmi Foundation</p>
    <div className='flex space-x-2 my-2'>
        <img
        className='h-10 w-15 rounded-full'
        src='https://pbs.twimg.com/card_img/1624213008510783488/S70L1h-W?format=png&name=medium'
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
    <p className='uppercase py-5 text-gray-300'>Started Work ... Ended...</p>
    <ul className='list-disc space-y-4 ml-5 text-lg'>
        <li>Summarypoints Summary points Summary points</li>
        <li>react Summary points mary points Summary points Summary points Summary points</li>
        <li>material ui Summary points Summary points Summary points Summary points Summary points</li>
        <li>tailwind  Summary pointsSummary points</li>
        <li>redux Summary pointsry points</li>
    </ul>
  </div>
  </article>
  );
}

export default ExperienceCard