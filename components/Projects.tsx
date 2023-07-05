import React from 'react';
import {motion} from 'framer-motion';
import {AiOutlineArrowRight} from "react-icons/ai"
import more_project from "../assets/more_project.png"
import Image from 'next/image';

type Props = {}

const Projects = (props: Props) => {
    const project1=[1];
    const project2 =[2];
    const project3 =[3];
    const project4 =[4];
    const project5 =[5];
    const project6 =[6];

  return (
    <div className='h-screen relative flex overflow-hidden
    flex-col text-left md:flex-row w-full justify-evenly 
    mx-auto items-center z-0
    '>

    <h3 className='absolute  uppercase
    tracking-[20px] text-2xl top-20 text-gray-500
    '>
        Projects</h3>

        <div className='relative w-full flex overflow-x-scroll 
         overflow-y-hidden snap-x  snap-mandatory z-10
         scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#b35a40]
         ' >
            {/* projects */}
            {project1.map((project,i )=>(
                <motion.div 
                key={project}     
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:1.5}}
                className='w-screen flex-shrink-0 snap-center flex flex-col 
                 space-y-5 items-center justify-center p-20 md:p-44 h-screen
                   '>
                    <motion.img
                    initial={{
                        y:-300,
                       opacity:0,
                    }}
                    transition={{duration:1.2}}
                    whileInView={{opacity:1, y:0}}
                    viewport={{once:true}}
                    className=' mt-12 w-[260px] h-[230px] shadow-md shadow-red-500 -my-4'
                     src='https://inquisitive-pasca-0e5b34.netlify.app/images/bookman.jpg'
                     
                     />
                       <a href='https://inquisitive-pasca-0e5b34.netlify.app/' className='font-semibold text-center text-2xl' ><span className=' text-blue-300 font-serif font-semibold text-sm'>Deployed Link</span> <AiOutlineArrowRight className='inline-flex '/></a>
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                        <span>App {i+1}: </span>
                        <span className='underline decoration-[#F7AB0A]'>
                              DIGI-DOC</span>
                        </h4>
                        <p className='text-lg text-center md:text-left'>
                            
                         This project aims is to avoid fraud entry in any big organization.
                          Physical efforts have been decreased and forgery can be avoided.
                          Documents cannot be stolen NFC (if available on the device) can be used to fetch the documents present in the database
                            
                            </p>
                    </div>
                </motion.div>
            ))}
            
            {project2.map((project,i)=>(
                <motion.div 
                key={project} 
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:1.5}}
                className='w-screen flex-shrink-0 snap-center flex flex-col 
                 space-y-5 items-center justify-center p-20 md:p-44 h-screen
                '>
                    <motion.img
                    initial={{
                        y:-300,
                       opacity:0,
                    }}
                    transition={{duration:1.2}}
                    whileInView={{opacity:1, y:0}}
                    viewport={{once:true}}
                    className=' mt-12 w-[200px] h-[200px] shadow-md shadow-red-500'
                     src='https://tldrthis.com/static/images/tldrthis-krishna.jpg'
                     
                     />
                     <a href='https://article-summerizer-using-open-ai-gpt4.vercel.app/' className='font-semibold text-center text-2xl' ><span className=' text-blue-300 font-serif font-semibold text-sm'>Deployed Link</span> <AiOutlineArrowRight className='inline-flex '/></a>
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                        <span>App {i+2}: </span>
                        <span className='underline decoration-[#F7AB0A]'>
                             Article Summerizer</span>
                        </h4>
                        <p className='text-lg text-center md:text-left'>
                           Made a fully functioning Fitness App where you can search correct excercises according to your fit</p>
                    </div>
                </motion.div>
            ))}


               {project3.map((project,i)=>(
                <motion.div 
                key={project} 
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:1.5}}
                className='w-screen flex-shrink-0 snap-center flex flex-col 
                 space-y-5 items-center justify-center p-20 md:p-44 h-screen
                '>
                    <motion.img
                    initial={{
                        y:-300,
                       opacity:0,
                    }}
                    transition={{duration:1.2}}
                    whileInView={{opacity:1, y:0}}
                    viewport={{once:true}}
                    className='-my-4 mt-12 w-[300px] h-[300px] shadow-md shadow-red-500'
                     src='https://repository-images.githubusercontent.com/610760471/f57ff513-91cf-48f0-a0c9-c799ce46b290'
                     
                     />
                 <a href='https://blog-app-with-appwrite.vercel.app/' className='font-semibold text-center text-2xl' ><span className=' text-blue-300 font-serif font-semibold text-sm'>Deployed Link</span> <AiOutlineArrowRight className='inline-flex '/></a>
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                        <span>App {i+3}: </span>
                        <span className='underline decoration-[#F7AB0A]'>
                            My blog app using App write as backend</span>
                        </h4>
                        <p className='text-lg text-center md:text-left'>
                          Made a personal blog app for sharing my web development journey and also for others to contribute to my open source projects.</p>
                    </div>
                </motion.div>
            ))}
            {project4.map((project,i)=>(
                <motion.div 
                key={project} 
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:1.5}}
                className='w-screen flex-shrink-0 snap-center flex flex-col 
                 space-y-5 items-center justify-center p-20 md:p-44 h-screen
                '>
                    <motion.img
                    initial={{
                        y:-300,
                       opacity:0,
                    }}
                    transition={{duration:1.2}}
                    whileInView={{opacity:1, y:0}}
                    viewport={{once:true}}
                    className=' mt-12 w-[300px] h-[300px] -my-4 shadow-md shadow-red-500'
                     src='https://miro.medium.com/v2/resize:fit:512/1*Mc4CmbMyc3OBmTMrbN3PSw.jpeg'
                     
                     />
                     <a href='https://react-ecommerce-with-redux-toolkit.vercel.app/' className='font-semibold text-center text-2xl' ><span className=' text-blue-300 font-serif font-semibold text-sm'>Deployed Link</span> <AiOutlineArrowRight className='inline-flex '/></a>
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                        <span>App {i+4}: </span>
                        <span className='underline decoration-[#F7AB0A]'>
                          E-commerece Store using react js with redux toolkit </span>
                        </h4>
                        <p className='text-lg text-center md:text-left'>
                          Made a fully functioning online store for coders wear and accesories using react js with redux tool kit for dynamic routing and Tailwind css for styling.I have used stripe for payment in this project.</p>
                    </div>
                </motion.div>
            ))}
          {project2.map((project,i)=>(
                <motion.div 
                key={project} 
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:1.5}}
                className='w-screen flex-shrink-0 snap-center flex flex-col 
                 space-y-5 items-center justify-center p-20 md:p-44 h-screen
                '>
                    <motion.img
                    initial={{
                        y:-300,
                       opacity:0,
                    }}
                    transition={{duration:1.2}}
                    whileInView={{opacity:1, y:0}}
                    viewport={{once:true}}
                    className=' -my-6 mt-12 w-[300px] h-[300px] shadow-md shadow-red-500'
                     src='https://letstranzact.com/_ipx/f_webp,fit_fill,s_370x245/inventory_management_software_perpetual.png'
                     
                     />
                       <a href='https://github.com/Akhilesh-pujar' className='font-semibold text-center text-2xl' ><span className=' text-blue-300 font-serif font-semibold text-sm'>Deployed Link</span> <AiOutlineArrowRight className='inline-flex '/></a>
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                        <span>App {i+5}: </span>
                        <span className='underline decoration-[#F7AB0A]'>
                              Stock Management using next js</span>
                        </h4>
                        <p className='text-lg text-center md:text-left'>
                         Made a Simple and user friendly interface so that user can check there stock in there warehouse and also can keep track of there product quantity and also implmented search functionality still it is in development stage but you can check the code in my repo.</p>
                    </div>
                </motion.div>
            ))}


{project6.map((project,i)=>(
                <motion.div 
                key={project} 
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:1.5}}
                className='w-screen flex-shrink-0 snap-center flex flex-col 
                 space-y-5 items-center justify-center p-20 md:p-44 h-screen
                '>
                   <Image src={more_project} alt='more' className=' mt-12 w-[200px] h-[200px] shadow-md shadow-red-500' />
                     <a href='https://github.com/Akhilesh-pujar' className='font-semibold text-center text-2xl' >Many more <AiOutlineArrowRight className='inline-flex '/></a>
       
                </motion.div>
            ))}




        </div>
        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12'>

        </div>
    </div>
  );
}

export default Projects;