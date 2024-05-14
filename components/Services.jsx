import { GanttChartSquare, Blocks, HandPlatter } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle  } from "./ui/card"

const servicesData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
        title: 'Web Design',
        description: 'During the course of my Full-Stack Bootcamp I found a passion for front-end development. In my free time I love creating mockup websites some of which you can view on my Projects Page!'

    },
    {
        icon: <Blocks size={72} strokeWidth={0.8} />,
        title: 'Web Development',
        description: 'While I love making websites look asthetically pleasing I also like to make sure they are functional and responsive.'

    },
    {
        icon: <HandPlatter size={72} strokeWidth={0.8} />,
        title: 'Customer Service',
        description: 'I have over 6 years of Customer Service experience and 2 year held in a Supervisor role. I approach every issue with patience, understanding, and a passion for problem solving.'

    },
]

const Services = () => {
    return (
        <section className="mb-12 xl:mb-36">
            <div className="container mx-auto">
                <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">My Services</h2>
                {/** grid items */}
                <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8 ">
                    {servicesData.map((item, index) => {
                        return (
                            <Card className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative" key={index}>
                                <CardHeader className="text-primary absolute -top-[60px]">
                                    <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">{item.icon}</div>
                                </CardHeader>
                                <CardContent className='text-center'>
                                    <CardTitle className='mb-4'>{item.title}</CardTitle>
                                    <CardDescription className='text-lg'>{item.description}</CardDescription>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Services