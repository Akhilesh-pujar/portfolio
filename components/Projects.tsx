import React from 'react';
import {motion} from 'framer-motion';

type Props = {}

const Projects = (props: Props) => {
    const project1=[1];
    const project2 =[2];
    const project3 =[3];
    const project4 =[4];
    const project5 =[5];

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
                    className=' mt-12 w-[260px] h-[230px] shadow-md shadow-red-500'
                     src='https://inquisitive-pasca-0e5b34.netlify.app/images/bookman.jpg'
                     
                     />
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
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                        <span>App {i+2}: </span>
                        <span className='underline decoration-[#F7AB0A]'>
                             Fitness App</span>
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
                    className=' mt-12 w-[400px] h-[200px] shadow-md shadow-red-500'
                     src='https://themeforest.img.customer.envatousercontent.com/files/429952479/02_ecommerce.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=509671dca9716085956f7dbee4d381c6'
                     
                     />
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                        <span>App {i+3}: </span>
                        <span className='underline decoration-[#F7AB0A]'>
                             Admin Dashboard using Refine js</span>
                        </h4>
                        <p className='text-lg text-center md:text-left'>
                           I have participated in hackathon where I made a admin dashboard for E-store website.Above picture is just a overview of how my project looks, you can vist my git hub account for whole project.</p>
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
                    className=' mt-12 w-[400px] h-[200px] shadow-md shadow-red-500'
                     src='https://www.eiosys.com/wp-content/uploads/2021/11/blog-15-Best-Email-Marketing-tools-in-2021.png'
                     
                     />
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                        <span>App {i+4}: </span>
                        <span className='underline decoration-[#F7AB0A]'>
                          E-commerece Store using react js</span>
                        </h4>
                        <p className='text-lg text-center md:text-left'>
                          Made a fully functioning online store for electronics goods using react and material ui for styling.I have used stripe for payment in this project.</p>
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
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                        <span>App {i+5}: </span>
                        <span className='underline decoration-[#F7AB0A]'>
                              Text Utils</span>
                        </h4>
                        <p className='text-lg text-center md:text-left'>
                           Made a simple web tool to assist developers and other people in daily tasks by providing tools for manipulating text data. The Initial tools include HTML, JSON, SQL, and XML formatters, Base 64 and URL encoder/decoder, and many other tools to handle text.</p>
                    </div>
                </motion.div>
            ))}





        </div>
        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12'>

        </div>
    </div>
  );
}

export default Projects;