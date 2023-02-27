import Head from 'next/head';
import type { GetStaticProps} from 'next';
import Link from 'next/link';




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
    <div className="bg-[rgb(36,36,36)] text-white h-screen ">
      <Head>
        <title>Akhil's Portfolio</title>
      </Head>
     
      <Header social={socials}/>
   
      {/*Banner*/}
      <section id="hero" className='snap-center'>
        <Hero/>
      </section>
 
      {/* about */}
      <section id="about" className=' snap-center'>
        <About/>
      </section>
      <section id="experience" className='snap-bottom'>
        <WorkExperience/>
      </section>
      <section id="skills" className='snap-start bg-[rgb(36,36,36)]'>
        <Skills/>
      </section>
      <section id="projects" className='snap-start bg-[rgb(36,36,36)]'>
        <Projects/>
      </section>
      <section id="contact" className='snap-start bg-[rgb(36,36,36)]'>
        <Contact/>
      </section>
      <Link href="#hero">
      <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='  flex items-center justify-center'>
            <img src='https://scontent.fblr20-3.fna.fbcdn.net/v/t39.30808-6/217680254_1516387568710257_7315332803292223119_n.jpg?stp=dst-jpg_p843x403&_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=O2D04wU2WJQAX9tV6oH&_nc_ht=scontent.fblr20-3.fna&oh=00_AfCMzrPy23jhtAckER6hVIZYZUNOAW8DU3gqorEW7S60zg&oe=63FEB671' 
            alt="footer"
            className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0'
            />
          </div>
      </footer>
      
      </Link>
?
     
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

