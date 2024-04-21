import { memo ,useEffect, useState } from "react"
import profilePhoto from "../assets/images/Profile.jpg"
import pythonPng from "../assets/icons/icons8-python-48.png"
import djangoPng from "../assets/icons/icons8-django-50.png"
import javaScriptPng from "../assets/icons/icons8-javascript-48.png"
import expressPng from "../assets/icons/icons8-express-js-48.png"
import reactPng from "../assets/icons/icons8-react-40.png"
import mangoDBPng from "../assets/icons/icons8-mongodb-48.png"
import postgressPng from "../assets/icons/icons8-postgresql-48.png"
import mySQLPng from "../assets/icons/icons8-mysql-50.png"
import tailwindPng from "../assets/icons/icons8-tailwind-css-48.png"



export default function HeroSection() {
    const [title, setTitle] = useState("Jr Backend Developer")

    const titles = ["Jr Backend Developer", "Jr Python Developer", "Jr Django Developer", "Jr Web Developer"]

    useEffect(() => {
        setInterval(() => {
            setTitle(titles[Math.floor(Math.random() * titles.length)])
        }, 3000)
    }, [])


    return (

        <div className="h-[90vh] w-full flex flex-col items-center justify-evenly gap-4  bg-gray-100">
            <div className="flex flex-col-reverse space-y-4 md:flex-row items-center justify-center space-x-4">
                <div className="flex flex-col items-end">
                    <h1 className="poppins text-3xl font-bold ">I'm Ahammed Ali Shaik</h1>
                    <h2 className="text-2xl font-bold text-gray-600">{title}</h2>
                </div>
                <img className="w-52 rounded-full shadow-lg border-2 border-black" src={profilePhoto} alt="Profile Photo" />
            </div>
            
            <TechStack></TechStack>
        </div>

    )
} 

const TechStack = memo(function(){
    
    return (
        
        <div className="flex flex-wrap  p-2 items-center justify-center gap-2">
                <h2 className="text-2xl font-semibold">Tech Stack</h2>
                <ul className="flex gap-2 flex-wrap">
                    <img className="p-2 cover cursor-pointer" src={pythonPng} alt="python" />
                    <img className="p-2 cover cursor-pointer" src={javaScriptPng} alt="JavaScript" />
                    <img className="p-2 cover cursor-pointer" src={djangoPng} alt="Django" />
                    <img className="p-2 cover cursor-pointer" src={expressPng} alt="ExpressJS" />
                    <img className="p-2 cover cursor-pointer" src={reactPng} alt="React" />
                    <img className="p-2 cover cursor-pointer" src={tailwindPng} alt="Tailwind" />
                    <img className="p-2 cover cursor-pointer" src={mySQLPng} alt="MySQL" />
                    <img className="p-2 cover cursor-pointer" src={postgressPng} alt="PostgressSQL" />
                    <img className="p-2 cover cursor-pointer" src={mangoDBPng} alt="MangoDB" />
                </ul>
            </div>
    )
});