import React, { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [sessaoAtiva, setSessaoAtiva] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window, scrollY > 50);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    })


    const handleMenuItemClick = (sessaoId) => {
        setSessaoAtiva(sessaoId);
        setIsOpen(false);
    }

    const menuItems = [
        { id: "sobre", label: "Sobre" },
        { id: "skills", label: "Skills" },
        { id: "experiencia", label: "Experiencia" },
        { id: "projetos", label: "Projetos" },
        { id: "educacao", label: "Educacao" },
        { id: "contatos", label: "Contatos" },

    ]


    return (
        <nav className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] lg:px-[20vw] ${isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
            }`}>
            <div className='text-white py-5 flex justify-between items-center'>
                <div className='text-lg font-semibold cursor-pointer #111138'>
                    <span className='text-[#2563EB]'>&lt;</span>
                    <span className='text-white'>Lucas</span>
                    <span className='text-[#2563EB]'>/</span>
                    <span className='text-white'>Barros</span>
                    <span className='text-[#2563EB]'>&gt;</span>
                </div>
                <ul className=' hidden md:flex space-x-8 text-white'>
                    {menuItems.map((item) => (
                        <li key={item.id} className={`cursor-pointer hover:text-[#2563EB] hover:scale-110 transform transition duration-300 ${sessaoAtiva === item.id ? "text-[#2563EB]" : ""}`}>
                            <button onClick={() => handleMenuItemClick(item.id)}>
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
                <div className='hidden md:flex space-x-4'>
                    <a href="https://github.com/BarrosPL" target='_blank' rel='noopener noreferrer' className='text-white hover: text-[#2563EB] hover:scale-120 transform transition duration-300'><FaGithub size={24} /></a>
                    <a href="https://github.com/BarrosPL" target='_blank' rel='noopener noreferrer' className='text-white hover: text-[#2563EB] hover:scale-120 transform transition duration-300'><FaLinkedin size={24} /></a>
                </div>
                <div className='md:hidden'>
                    {
                        isOpen ? (
                            <FiX className='text-3xl text-[#2563EB] cursor-pointer'
                                onClick={() => setIsOpen(false)} />
                        ) : (
                            <FiMenu className='text-3xl text-[#2563EB] cursor-pointer'
                                onClick={() => setIsOpen(true)} />
                        )
                    }
                </div>
            </div>
            {isOpen && (
                <div className=' absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#1D4ED8] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden'>
                    <ul className='flex flex-col items-center space-y-4 py-4 text-white'>
                        {menuItems.map((item) => (
                            <li key={item.id} className={`cursor-pointer hover:text-[#60A5FA] hover:scale-110 transform transition duration-300 ${sessaoAtiva === item.id ? "text-white" : ""}`}>
                                <button onClick={() => handleMenuItemClick(item.id)}>
                                    {item.label}
                                </button>
                            </li>
                        ))}
                        <div className='flex space-x-4'>
                            <a href="https://github.com/BarrosPL" target='_blank' rel='noopener noreferrer' className='text-white hover: text-[#60A5FA] hover:scale-120 transform transition duration-300'><FaGithub size={24} /></a>
                            <a href="https://www.linkedin.com/in/pedro-lucas-barros-silva-30b6172a2/" target='_blank' rel='noopener noreferrer' className='text-white hover: text-[#60A5FA] hover:scale-120 transform transition duration-300'><FaLinkedin size={24} /></a>
                        </div>
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar