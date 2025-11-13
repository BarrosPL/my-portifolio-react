import React from 'react'

const Experiencia = () => {
  return (
     <section id="about" className="py-20 relative pt-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 hover:scale-110 transform transition duration-300">
            <span className="gradient-text text-white ">Experiências e Formação</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass p-8 md:p-12 rounded-2xl mb-8 border border-white bg-[#0B0A26] hover:scale-102 transform transition duration-300">
            <h3 className="text-2xl font-semibold mb-6 text-white">Experiência Profissional</h3>
            
            {/* Experiência I4T.AI */}
            <div className="mb-8 pb-8 border-b border-white">
              <h4 className="text-xl font-semibold text-primary mb-2 text-[#2563EB]">Engenheiro de Software focado em Automações</h4>
              <p className="text-muted-foreground mb-1 text-gray-400">Projeto para I4T.AI</p>
              <p className="text-sm text-muted-foreground mb-4 text-gray-400">Jul 2025 – Jul 2025</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary text-[#2563EB]">•</span>
                  <span className='text-gray-400'>Desenvolvimento de um agente inteligente integrando OneDrive, n8n e OpenAI, com foco em automação de processos e respostas inteligentes</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary  text-[#2563EB]">•</span>
                  <span className='text-gray-400'>Criação de fluxos personalizados para múltiplos clientes, integrando tecnologias para potencializar a experiência do usuário</span>
                </li>
              </ul>
            </div>

            {/* Experiência Antropus */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-secondary mb-2 text-white">Antropus Educacional</h4>
              <p className="text-sm text-muted-foreground mb-4 text-gray-400">Mar 2024 – Jun 2025</p>
              
              <div className="ml-4 mb-6">
                <h5 className="text-lg font-semibold text-foreground mb-2 text-[#2563EB]">Analista de TI</h5>
                <p className="text-sm text-muted-foreground mb-3 text-gray-400">Out 2024 – Jun 2025</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-secondary text-[#2563EB]">•</span>
                    <span className='text-gray-400'>Colaboração com equipes internas para otimização de processos tecnológicos</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-secondary text-[#2563EB]">•</span>
                    <span className='text-gray-400'>Desenvolvimento de sistemas, melhorias e integrações entre sistemas da intituição e sistemas utilizados.</span>
                  </li>
                </ul>
              </div>

              <div className="ml-4">
                <h5 className="text-lg font-semibold text-foreground mb-2 text-[#2563EB]">Assistente de TI</h5>
                <p className="text-sm text-muted-foreground mb-3 text-gray-400">Mar 2024 – Set 2024</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-secondary text-[#2563EB]">•</span>
                    <span className='text-gray-400'>Suporte técnico e manutenção de sistemas e dispositivos</span>
                  </li>
                  <li className="flex gap-2">
                  </li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold mb-4 mt-8 pt-8 border-t border-white text-white">Formação Acadêmica</h3>
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-gray-400">Engenharia de Software</h4>
              <p className="text-sm text-muted-foreground text-gray-400 mb-4">Jan 2023 - Dez 2026</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experiencia