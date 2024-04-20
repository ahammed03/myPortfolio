import AboutMe from "../assets/images/about-me.jpg"
"https://images.unsplash.com/photo-1528747045269-390fe33c19f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWJvdXQlMjBtZXxlbnwwfHwwfHx8MA%3D%3D"

export default function AboutSection() {

    return (
        <div className="w-full h-[60vh] flex justify-center items-center gap-4" >
            <img className="w-72" src={AboutMe} alt="" />
            <div className=" w-[50vw] flex flex-col gap-1">
                <p>
                    Hey there! I'm Ahammed Ali Shaik, a software enthusiast based in Bengaluru. I completed my Bachelor's degree (BTech) from MITS, where I discovered my passion for building software.
                </p>
                <p>
                    I love diving into coding challenges and crafting solutions that make a difference. From writing elegant code to designing user-friendly interfaces, I enjoy every aspect of software development.
                </p>
                <p>
                    I'm excited about the possibilities that software brings and look forward to contributing my skills to building innovative projects and collaborating with like-minded individuals. Let's create something amazing together!
                </p>

            </div>
        </div>
    )
}