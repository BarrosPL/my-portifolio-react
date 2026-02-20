import { useState } from 'react'
import Contatos from './components/Contatos/Contatos'
import Experiencia from './components/Experiencia/Experiencia'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Projetos from './components/Projetos/Projetos'
import Skills from './components/Skills/Skills'
import Sobre from './components/Sobre/Sobre'
import './App.css'
import MotionBlur from './MotionBlur'
import WhatsappButton from './components/WhatsappButton/WhatsappButton'

function App() {
  return (
    <>
      <div className='bg-[#050414] relative overflow-hidden'>
        {/* MotionBlur fixo no canto esquerdo, mais abaixo do topo */}
        <MotionBlur
          position={{ top: '18%', left: '15%' }}
          size={{ width: '18%', height: '22%' }}
          opacity={0.35}
        />

        {/* Grid overlay */}
        <div className='absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

        <div className='relative pt-20'>
          <Navbar />
          <Sobre />
          <Skills />
          <Projetos />
          <Experiencia />
          <Contatos />
          <Footer />
          <WhatsappButton number="+5583999849151" />
        </div>
      </div>
    </>
  )
}

export default App
