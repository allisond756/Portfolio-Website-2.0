'use client'
import Link from "next/link";
import { Button } from "./ui/button";

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

//swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//required modules
import { Pagination } from 'swiper/modules';

//components
import ProjectCard from '@/components/ProjectCard';

const projectData = [
  {
    image: '/work/1.png',
    category: 'nextjs / typescript',
    name: 'Plant Shop - Next.js Website',
    description: 'Learn about the care conditions for all your favorite plants! (WIP)',
    link: 'https://statuesque-kitsune-17fac8.netlify.app',
    github: 'https://github.com/allisond756/Flower-Shop',
  },
  {
    image: '/work/2.png',
    category: 'react / typescript',
    name: 'MovieWatch - React Website',
    description: 'Browse movies currently in theatres and enter them to your dashboard!',
    link: 'https://meek-elf-feedfd.netlify.app',
    github: 'https://github.com/allisond756/Final-Project-Movie-App',
  },
  {
    image: '/work/3.png',
    category: 'flask / html / css',
    name: 'MovieHub - Flask Website',
    description: 'Flask app used to handle CRUD operations for MovieWatch Site.',
    link: 'https://flask-movie-app.onrender.com',
    github: 'https://github.com/allisond756/flask-movie-app',
  },
  {
    image: '/work/4.png',
    category: 'nextjs / javascript',
    name: 'CameraExchange - Next.js Website',
    description: 'Online store for new and vintage cameras. ',
    link: 'https://cameraexchange.netlify.app',
    github: 'https://github.com/allisond756/CameraExchange',
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/** text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px]
        flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">{/** project description */}</p>
          <Link href='/projects'>
            <Button>All projects</Button>
          </Link>
        </div>
        {/** slider */}
        <div className="xl:max-w-[800px] xl:absolute right-[160px] top-0">
          <Swiper 
            className="h-[460px]" 
            slidesPerView={1} 
            breakpoints={{
              640: {
                slidesPerView: 1
              },
            }} 
            spaceBetween={30} 
            modules={[Pagination]} 
            pagination={{ clickable: true }}
          >
            {/** show only the first 3 projects for the slides */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Work