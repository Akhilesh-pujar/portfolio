import Head from 'next/head';
import type { GetStaticProps} from 'next';
import Link from 'next/link';
import Image from 'next/image';
import hero_banner from '../assets/hero_banner.jpeg';




import About from '../components/About';
import Header from '../components/Header';
import Hero from '../components/Hero';
import WorkExperience from '@/components/WorkExperience';

import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { Project } from '@/typing';
import { PageInfo } from '@/typing';
import { Experience } from '@/typing';
import { Social } from '@/typing';
import { Skill } from '@/typing';
import { fetchPageInfo } from '../utils/fetchPageInfo';
import { fetchSkills } from '@/utils/fetchSkills';
import { fetchProjects } from '@/utils/fetchProjects';
import { fetchSocials } from '@/utils/fetchSocials';
import { fetchExperiences } from '@/utils/fetchExperiences';


type Props={
  pageInfo:PageInfo;
  experiences:Experience[];
  projects:Project[]
  skills:Skill[];
  socials:Social[];

}

const Home = ({ pageInfo, experiences, projects,skills ,socials}:Props)=> {
  return (
    <div className='bg-[rgb(36,36,36)] text-white max-h-full  '>
      <Head>
        <title>Akhil's Portfolio</title>
      </Head>
     
      <Header social={socials}/>
   
      {/*Banner*/}
      <section id="hero" className='snap-center  '>
        <Hero/>
      </section>
 
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
       <section id="projects" className='snap-start '>
        <Projects/>
      </section>
      <section id="contact" className='snap-start '>
        <Contact/>
      </section>
      <Link href="#hero">
      <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <Image src={hero_banner}
            alt="footer"
            className=' object-cover h-10 w-10 rounded-full filter grayscale hover:grayscale-0'
            />
          </div>
      </footer>
      </Link>

     
    </div>
  );
};

export default Home;

// export const getStaticProps:GetStaticProps<Props>=async()=> {

//   // const pageInfo :PageInfo= await fetchPageInfo();
//   const experiences: Experience[] = await fetchExperiences();

//   const skills: Skill[] = await fetchSkills();
//   const projects: Project[] = await fetchProjects();
//   const socials: Social[] = await fetchSocials();

//   return {
//     props: {
//       // pageInfo,
//       experiences,
//       skills,
//       projects,
//       socials,
//     },
//   };
//   //nodejs will attempt to regenerate the page when request comes
//   // at most once every 10 sec
// }

