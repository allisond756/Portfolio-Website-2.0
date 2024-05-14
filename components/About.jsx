import DevImg from "./DevImg";
import Image from "next/image";
import {Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import {
    User2,
    MailIcon,
    HomeIcon,
    GraduationCap,
    Briefcase,
} from 'lucide-react'


const infoData = [
    {
        icon: <User2 size={20} />,
        text: 'Allison Daniel',
    },
    {
        icon: <MailIcon size={20} />,
        text: 'allisond756@gmail.com',
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'Attended University of Houston',
    },
    {
        icon: <HomeIcon size={20} />,
        text: 'Houston, Texas',
    },
]

const qualificationData = [
    {
       title: 'education',
       data: [
        {
            university: 'Coding Temple',
            qualification: 'Full-Stack Engineering Bootcamp',
            years: '2023'

        },
        {
            university: 'Google',
            qualification: 'Data Analytics Course',
            years: '2024'

        },
        {
            university: 'University of Houston',
            qualification: 'Psychology (B.S.)',
            years: '2016-2017'

        }
       ] 
    },
    {
        title: 'experience',
        data: [
            {
                company: 'Whole Foods Market',
                role: 'Store Support Team Member',
                years: '2017-2019'
    
            },
         {
             company: 'Whole Foods Market',
             role: 'Store Support Supervisor',
             years: '2019-2021'
 
         },
         {
             company: 'Whole Foods Market',
             role: 'Store Scanning Specialist',
             years: '2021-2022'
 
         },
         {
            company: 'Whole Foods Market',
            role: 'Store Support Team Member',
            years: '2022-2023'

        },
        ], 
     },
]

const skillData = [
    {
       title: 'skills', 
       data: [
        {
            title: 'Front-end Development:',
            name: 'HTML, CSS, Tailwind, Bootstrap'
        },
        {
            title: 'Back-end Development:',
            name: 'Javascript, Python, Typescript, Java'
        },
        {
            title: 'Data Analysis:',
            name: 'SQL, R'
        },
       ]
    },
    {
        title: 'tools', 
        data: [
         {
            imgPath: '/about/vscode.svg'
         },
         {
            imgPath: '/about/rstudio.svg'
        },
        {
            imgPath: '/about/tableau.svg'
        },
        {
            imgPath: '/about/bigquery.svg'
        },
        {
            imgPath: '/about/postgresql.svg'
        },
        ]
     }
]

const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title)
    };

    
    return (
        <section className="xl:h-[860px] pb-12 xl:py-24">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
                    About me
                </h2>
                <div className="flex flex-col xl:flex-row">
                    {/** image */}
                    <div className="hidden xl:flex flex-1 relative">
                        <DevImg containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[666px] 
                            h-[375px] bg-no-repeat relative' imgSrc='/about/developer.png' />
                    </div>
                    {/** tabs */}
                    <div className="flex-1">
                        <Tabs defaultValue="personal">
                            <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">Personal Info</TabsTrigger>
                                <TabsTrigger className="w-[162px] xl:w-auto" value="qualifications">Experience</TabsTrigger>
                                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">Skills</TabsTrigger>
                            </TabsList>
                            {/** tabs content */}
                            <div className="text-lg mt-12 xl:mt-8">
                                {/** personal */}
                                <TabsContent value='personal'>
                                    <div className="text-center xl:text-left">
                                        <h3 className="h3 mb-4">Excited to Combine Customer Service and Technical Skills!</h3>
                                        <p className="subtitle max-w-xl mx-auto xl:mx-0">
                                            Completed a Full-Stack engineering bootcamp in 2023 and gained experience in using APIs, 
                                            creating front-end and back-end websites/apps, hosting websites, and running queries with SQL.
                                            I continued my education by new learning languages and frameworks like Java and Next.js.
                                        </p>
                                        <p className="subtitle max-w-xl mx-auto xl:mx-0">
                                            Completed Google Data Anlytics Course in 2024. Gained experience in creating Data Visualizations using Tableau, using R/RStudio to clean and filter data,
                                            and experience forming analyses based on data-driven decision-making.
                                        </p>
                                        {/** icons */}
                                        <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                            {infoData.map((item, index) => {
                                                return (
                                                    <div 
                                                        className="flex items-center gap-x-4 mx-auto xl:mx-0"
                                                        key={index}
                                                    >
                                                        <div>{item.icon}</div>
                                                        <div>{item.text}</div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </TabsContent>
                                {/** qualifications */}
                                <TabsContent value='qualifications'>
                                    <div>
                                        <h3 className="h3 mb-8 text-center xl:text-left">My journey</h3>
                                        {/** experience & education wrapper */}
                                        <div className="grid md:grid-cols-2 gap-y-8">
                                            {/** experience */}
                                            <div className="flex flex-col gap-y-6">
                                                <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                    <Briefcase />
                                                    <h4 className="capitalize font-medium">
                                                        {getData(qualificationData, 'experience').title}
                                                    </h4>
                                                </div>
                                                {/** list */}
                                                <div className="flex flex-col gap-y-8">
                                                    {getData(qualificationData, 'experience').data.map((item, index) => {
                                                        const {company, role, years} = item;
                                                        return (
                                                            <div className="flex gap-x-8 group" key={index}>
                                                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                                </div>
                                                                <div>
                                                                    <div className="font-semibold text-xl leading-none mb-2">{company}</div>
                                                                    <div className="text-lg leading-none text-muted-foreground mb-4">{role}</div>
                                                                    <div className="text-base font-medium">{years}</div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                            {/** education */}
                                            <div className="flex flex-col gap-y-6">
                                                <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                    <GraduationCap sixe={28}/>
                                                    <h4 className="capitalize font-medium">
                                                        {getData(qualificationData, 'education').title}
                                                    </h4>
                                                </div>
                                                {/** list */}
                                                <div className="flex flex-col gap-y-8">
                                                    {getData(qualificationData, 'education').data.map((item, index) => {
                                                        const {university, qualification, years} = item;
                                                        return (
                                                            <div className="flex gap-x-8 group" key={index}>
                                                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                                </div>
                                                                <div>
                                                                    <div className="font-semibold text-xl leading-none mb-2">{university}</div>
                                                                    <div className="text-lg leading-none text-muted-foreground mb-4">{qualification}</div>
                                                                    <div className="text-base font-medium">{years}</div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                {/** skills */}
                                <TabsContent value='skills'>
                                    <div className="text-center xl:text-left">
                                        <h3 className="h3 mb-8">My Toolbox</h3>
                                        {/** skills */}
                                        <div className="mb-16">
                                            <h4 className="text-xl font-semibold mb-2">Skills</h4>
                                            <div className="border-b border-border mb-4"></div>
                                            {/** skills list */}
                                            <div>
                                                {getData(skillData, 'skills').data.map((item, index) => {
                                                    const { title, name } = item;
                                                    return (
                                                        <div className="w-2/4 text-center xl:text-left mx-auto xl:mx-0" key={index}>
                                                            <div className="font-semibold text-primary">{title}</div>
                                                            <div className="font-medium">{name}</div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        {/** tools */}
                                        <div>
                                            <h4 className="text-xl font-semibold mb-2 xl:text-left">Tools</h4>
                                            <div className="border-b border-border mb-4"></div>
                                            {/** tools list */}
                                            <div className="flex gap-x-8 justify-center xl:justify-start">
                                                {getData(skillData, 'tools').data.map((item, index) => {
                                                    const {imgPath} = item;
                                                    return (
                                                        <div key={index}>
                                                            <Image 
                                                                src={imgPath} 
                                                                width={50} 
                                                                height={50} 
                                                                alt="" 
                                                                priority 
                                                            />
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About