import {memo} from 'react'


export default function Navbar() {

    return (
        <div className="flex w-full items-center justify-around shadow-md p-4 mb-1 h-[10vh]">
            <h2 className="text-2xl font-bold">Portfolio</h2>
            <ul className="hidden md:flex w-2/5 items-center justify-around font-semibold">
                <li><a className="hover:text-yellow-400" href="#">Home</a></li>
                <li><a className="hover:text-yellow-400" href="#">About</a></li>
                <li><a className="hover:text-yellow-400" href="#">Projects</a></li>
                <li><a className="hover:text-yellow-400" href="#">Contact</a></li>
            </ul>
           
        </div>
    )
}
