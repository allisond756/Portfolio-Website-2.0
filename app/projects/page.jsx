'use client';
import React, { useState } from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: '/work/1.png',
    category: 'next.js',
    name: 'Plant Shop - Next.js Website',
    description: 'Work in Progress. Created using reusable Typescript components, utilizes plant API for plant information, and styled with Tailwind.',
    link: 'https://statuesque-kitsune-17fac8.netlify.app',
    github: 'https://github.com/allisond756/Flower-Shop',
  },
  {
    image: '/work/2.png',
    category: 'react',
    name: 'MovieWatch - React Website',
    description: 'Uses MovieDB API for movie information, uses Auth0 for user authentication, allows user use CRUD operations in their Watchlist Dashboard, and styled with Tailwind & CSS.',
    link: 'https://meek-elf-feedfd.netlify.app',
    github: 'https://github.com/allisond756/Final-Project-Movie-App',
  },
  {
    image: '/work/3.png',
    category: 'flask',
    name: 'MovieHub - Flask Website',
    description: 'Flask App with minimal functionality, used to handle CRUD operations for MovieWatch website.',
    link: 'https://flask-movie-app.onrender.com',
    github: 'https://github.com/allisond756/flask-movie-app',
  },
  {
    image: '/work/4.png',
    category: 'flask',
    name: 'CameraExchange - Next.js Website',
    description: 'Next.js app using Sanity CMS and Stripe for payments. Styled with Tailwind. ',
    link: 'https://cameraexchange.netlify.app',
    github: 'https://github.com/allisond756/CameraExchange',
  },
];

// remove category duplicates
const uniqueCategories = ['all projects', ...new Set(projectData.map((item) => item.category))]

const Projects = () => {
  const [categories, setCategories] =useState(uniqueCategories);
  const [category, setCategory] = useState('all projects');

  const filteredProjects = projectData.filter(project => {
    // if category is 'all projects return all projects, else filter by category
    return category == 'all projects' ? project : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12 ">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">My Projects</h2>
        {/** tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto 
          md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger 
                  onClick={()=> setCategory(category)}
                  value={category} 
                  key={index} 
                  className='capitalize w-[162px] md:w-auto'
                >
                    {category}
                </TabsTrigger>
              )
            })}
          </TabsList>
          {/** tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index)=> {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard  project={project} />
                </TabsContent>
              )
            })}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Projects