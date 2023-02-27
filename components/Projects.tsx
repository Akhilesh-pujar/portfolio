import React from 'react';
import {motion} from 'framer-motion';

type Props = {}

const Projects = (props: Props) => {
    const project1=[1];
    const project2=[2];
    const project3=[3];
    const project4 = [4];
  return (
    <div className='h-screen relative flex overflow-hidden
    flex-col text-left md:flex-row w-full justify-evenly 
    mx-auto items-center z-0
    '>

    <h3 className='absolute  uppercase
    tracking-[20px] text-2xl top-20
    '>
        Projects</h3>

        <div className='relative w-full flex overflow-x-scroll 
         overflow-y-hidden snap-x  snap-mandatory z-10
         scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]
         '>
            {/* projects */}
            {project1.map((project,i)=>(
                <motion.div 
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
                    className=' mt-12 w-[260px] h-[230px]'
                     src='https://inquisitive-pasca-0e5b34.netlify.app/images/bookman.jpg'
                     
                     />
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                        <span className='underline decoration-[#F7AB0A]'>
                             App {i+1}: DIGI-DOC</span>
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
                    className=' mt-12 w-[400px] h-[200px]'
                     src='https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png'
                     
                     />
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                        <span className='underline decoration-[#F7AB0A]'>
                             App {i+2}: Zomato Website Clone</span>
                        </h4>
                        <p className='text-lg text-center md:text-left'>
                           Made a fully functioning zomato website (clone) and also added track order feature</p>
                    </div>
                </motion.div>
            ))}


               {project3.map((project,i)=>(
                <motion.div 
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
                    className=' mt-12 w-[400px] h-[200px]'
                     src='https://themeforest.img.customer.envatousercontent.com/files/429952479/02_ecommerce.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=509671dca9716085956f7dbee4d381c6'
                     
                     />
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                        <span className='underline decoration-[#F7AB0A]'>
                             App {i+3}: Admin Dashboard using Refine js</span>
                        </h4>
                        <p className='text-lg text-center md:text-left'>
                           I have participated in hackathon where I made a admin dashboard for E-store website.Above picture is just a overview of how my project looks, you can vist my git hub account for whole project.</p>
                    </div>
                </motion.div>
            ))}
            {project4.map((project,i)=>(
                <motion.div 
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
                    className=' mt-12 w-[400px] h-[200px]'
                     src='https://www.eiosys.com/wp-content/uploads/2021/11/blog-15-Best-Email-Marketing-tools-in-2021.png'
                     
                     />
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                        <span className='underline decoration-[#F7AB0A]'>
                             App {i+4}:E-commerece Store using react js</span>
                        </h4>
                        <p className='text-lg text-center md:text-left'>
                          Made a fully functioning online store for electronics goods using react and material ui for styling.I have used stripe for payment in this project.</p>
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