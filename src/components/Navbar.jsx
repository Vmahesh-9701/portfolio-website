import React, { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="h-[10vh] flex items-center bg-[#070F2B] justify-between px-6 md:px-8 shadow-[0_1px_20px_rgba(34,211,238,0.15)] text-white fixed top-0 left-0 w-full z-50">
            <div className="font-['Sora'] text-[13px] sm:text-lg md:text-2xl font-semibold tracking-wide hover:text-cyan-400 transition duration-300 whitespace-nowrap">
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
            
            {/* Desktop Resume Button */}
            <a
                href="https://drive.google.com/file/d/1Z_a-Q26p5Ds5erXCxMYLVXI6dlfWEYMJ/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:block"
            >
                <button className="px-5 py-2 rounded-xl bg-[#5755FE] hover:bg-[#392467] transition font-medium cursor-pointer">
                    Resume
                </button>
            </a>

            {/* Hamburger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex md:hidden text-white focus:outline-none z-50 p-2 cursor-pointer"
                aria-label="Toggle Menu"
            >
                {isOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                )}
            </button>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="absolute top-[10vh] left-0 w-full bg-[#070F2B]/95 backdrop-blur-lg flex flex-col items-center gap-6 py-8 border-b border-cyan-400/20 shadow-[0_10px_20px_rgba(34,211,238,0.1)] md:hidden transition-all duration-300 z-40">
                    <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-[#3ABEF9] transition text-lg font-['Poppins']">
                        Home
                    </a>
                    <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-[#3ABEF9] transition text-lg font-['Poppins']">
                        About
                    </a>
                    <a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-[#3ABEF9] transition text-lg font-['Poppins']">
                        Skills
                    </a>
                    <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-[#3ABEF9] transition text-lg font-['Poppins']">
                        Projects
                    </a>
                    <a href="#certificates" onClick={() => setIsOpen(false)} className="hover:text-[#3ABEF9] transition text-lg font-['Poppins']">
                        Certificates
                    </a>
                    <a href="#dsa" onClick={() => setIsOpen(false)} className="hover:text-[#3ABEF9] transition text-lg font-['Poppins']">
                        DSA
                    </a>
                    <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-[#3ABEF9] transition text-lg font-['Poppins']">
                        Contact
                    </a>
                    <a
                        href="https://drive.google.com/file/d/1Z_a-Q26p5Ds5erXCxMYLVXI6dlfWEYMJ/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                    >
                        <button className="px-5 py-2 rounded-xl bg-[#5755FE] hover:bg-[#392467] transition font-medium cursor-pointer">
                            Resume
                        </button>
                    </a>
                </div>
            )}
        </div>
    )
}

export default Navbar