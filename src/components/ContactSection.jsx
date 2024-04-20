
import EmailIcon from "../assets/icons/icons8-email-100.png"
import LinkedIn from "../assets/icons/icons8-linkedin-48.png"

export default function ContactSection() {
    return (
        <div className="h-[40vh]  flex justify-center items-center flex-col" id="contact">
            <h2 className="text-2xl font-bold">Contact</h2>
            <div className="flex gap-4">
                <div className="flex items-center">
                    <img className="w-14" src={EmailIcon} alt="" />
                    <a href="mailto:ahammedshaik0301@gmail.com">ahammedshaik0301@gmail.com</a>
                </div>
                <div className="flex items-center">
                    <img className="w-12" src={LinkedIn} alt="" />
                    <a href="https://www.linkedin.com/in/ahammed03/">Linkedin</a>
                </div>
            </div>
        </div>
    )
}