import React from 'react'

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white">
        <div className="container mx-auto px-4 text-center text-white">
          <p className="text-muted-foreground">
            © 2025 Desenvolvido por Pedro Lucas.
          </p>
        </div>
         <div className='text-lg font-semibold cursor-pointer #111138 justify-center items-center text-center pt-3'>
                    <span className='text-[#2563EB]'>&lt;</span>
                    <span className='text-white'>Lucas</span>
                    <span className='text-[#2563EB]'>/</span>
                    <span className='text-white'>Barros</span>
                    <span className='text-[#2563EB]'>&gt;</span>
         </div>
      </footer>
  )
}

export default Footer