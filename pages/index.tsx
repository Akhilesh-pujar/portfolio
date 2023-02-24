import Head from 'next/head';
import type { NextPage } from 'next';


import About from '../components/About';
import Header from '../components/Header';
import Hero from '../components/Hero';
import WorkExperience from '@/components/WorkExperience';
import Skills from '@/components/Skills';

const Home: NextPage = ()=> {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen ">
      <Head>
        <title>Akhil's Portfolio</title>
      </Head>
     
      <Header/>
   
      {/*Banner*/}
      {/* <section id="hero" className='snap-center'>
        <Hero/>
      </section> */}
 
      {/* about */}
      <section id="about" className='snap-center'>
        <About/>
      </section>
      <section id="experience" className='snap-bottom'>
        <WorkExperience/>
      </section>

      <section id="skills" className='snap-start'>
        <Skills/>

      </section>
     
    </div>
  );
};

export default Home;

