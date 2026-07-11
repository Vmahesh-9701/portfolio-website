import React from 'react'

const Navbar = () => {
    return (
        <div className="h-[10vh] flex items-center bg-[#070F2B] justify-between px-8 shadow-[0_1px_20px_rgba(34,211,238,0.15)] text-white fixed top-0 left-0 w-full z-50">
            <div className="font-['Sora'] text-2xl font-semibold tracking-wide hover:text-cyan-400 transition duration-300">
                <span className="text-sky-400">Veeramallu</span> Mahesh Naga Gopi
            </div>
            <div className="hidden md:flex items-center gap-10 text-lg font-['Poppins']">
                <a href="#home" className="hover:text-[#3ABEF9] transition">
                    Home
                </a>
                <a href="#about" className="hover:text-[#3ABEF9] transition">
                    About
                </a>
                <a href="#skills" className="hover:text-[#3ABEF9] transition">
                    Skills
                </a>
                <a href="#projects" className="hover:text-[#3ABEF9] transition">
                    Projects
                </a>
                <a href="#certificates" className="hover:text-[#3ABEF9] transition">
                    Certificates
                </a>
                <a href="#dsa" className="hover:text-[#3ABEF9] transition">
                    DSA
                </a>
                <a href="#contact" className="hover:text-[#3ABEF9] transition">
                    Contact
                </a>
            </div>
            <a
                href="https://drive.google.com/file/d/1C4lQFVsNMPNv8_AahcbyKii_ICK50ZOH/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="px-5 py-2 rounded-xl bg-[#5755FE] hover:bg-[#392467] transition font-medium">
                    Resume
                </button>
            </a>
        </div>
    )
}

export default Navbar