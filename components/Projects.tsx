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
                     src='data:image/png;base64,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'
                     
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