import GitHub from '../assets/icons/icons8-github-30.png'
import chatBotImg1 from '../assets/projectsImages/ChatBot.png'
import tailorFlowImg from '../assets/projectsImages/TailorFlow.png'

export default function ProjectsSection() {

    const projectsData = [
        {
            'title': 'Chatbot using Gemini AI',
            'description': `
                            Utilizing Gemini AI's powerful capabilities, our chatbot delivers intelligent responses and personalized interactions. 
                            Supported by a robust Django backend, it seamlessly integrates with various systems, providing efficient communication and 
                            enhancing user experiences
                            `,
            'codeLink': 'https://github.com/ahammed03/chatbot.git',
            'imageLink' :chatBotImg1
        },
        {
            'title': 'TailorFlow',
            'description': `
                            TailorFlow streamlines tailor operations by efficiently managing orders and customer data. With its intuitive dashboard, 
                            tailors can easily track daily orders and analyze trends. Built on the Django framework, it offers a robust and customizable
                            solution for tailoring businesses, optimizing their workflow and enhancing customer satisfaction.
                            `,
            'codeLink': 'https://github.com/ahammed03/TailorFlow1.git',
            'imageLink' : tailorFlowImg
        },
        
    ]

    return (

        <div className='bg-gray-100 flex flex-col gap-5 items-center  p-4'>
            <h2 className='text-2xl font-bold'>Projects</h2>
            {
                projectsData.map((project, index) => (
                    <ProjectComponent key={index} title={project.title} description={project.description} codeLink={project.codeLink} imageLink ={project.imageLink}/>
                ))
            }

        </div>
    )
}

function ProjectComponent({ title, description, codeLink ,imageLink}) {
    return (
        <div className="flex-col md:flex-row flex md:h-[40vh] lg:h-auto gap-5 items-center w-[80%] p-3 border-b-2 mb-1">
            <img className='h-[95%] md:w-[40%] rounded-md' src={imageLink} alt="" />
            <div className="space-y-1.5">
                <h3 className="text-xl font-semibold text-blue-600">{title}</h3>
                <p className='text-justify'>{description}</p>
                <a href={codeLink} className='flex gap-1 items-center font-semibold'><img src={GitHub} alt="GitHubIcon" /></a>
            </div>
        </div>
    )
}
