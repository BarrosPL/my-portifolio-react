import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import ProfileImage from '../../assets/profile_image.png'

const Sobre = () => {
  return (
    <section id='sobre' className=' px-6 py-4[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32 scroll-mt-60'>
      <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
          <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'>
            Prazer, me chamo
          </h1>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>
            Lucas Barros
          </h2>
          <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#2563EB] leading-tight'>
            <span className='text-white'>Sou </span>
            <TypeAnimation
              sequence={[
                'Desenvolvedor Web Full-Stack',
                2000,                       
                'Engenheiro de Software',   
                2000,                       
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
              style={{ display: 'inline-block', color: '#2563EB' }}
            />
          </h3>
          <p className='text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed'>
          Sou Lucas, estudante de Engenharia de Software e desenvolvedor Full Stack, apaixonado por tecnologia e pela construção de soluções digitais completas. Tenho experiência no desenvolvimento front-end e back-end, criando interfaces modernas, responsivas e intuitivas, aliadas a sistemas robustos e escaláveis. Atuo com HTML, CSS, JavaScript e TypeScript, utilizando frameworks como React e Next.js, sempre com foco em transformar ideias em aplicações funcionais, performáticas e bem estruturadas, do banco de dados à experiência final do usuário.
          </p>
        </div>
        <div className=' md:w-1/2 flex justify-center md:justify-end ml-3'>
        <img src={ProfileImage} alt='Lucas Barros' className='  w-130 h-130 rounded-full object-cover object-top drop-shadow-[0_10px_20px_rgba(37,99,235,0.5)] hover:scale-102 transform transition duration-300'/>

        </div>
      </div>
    </section>
  )
}

export default Sobre
