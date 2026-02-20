import React from "react";
import PetshopImage from "../../assets/petshop.jpeg";
import DomRicardo from "../../assets/domricardo.png";
import EasyConnect from "../../assets/easyconnect.png";
import { desc } from "framer-motion/client";

const projects = [
  {
    image: PetshopImage,
    title: "PetShop Landing Page",
    description: "Landing Page desenvolvida utilizando React, TypeScript e Tailwind CSS",
    url: 'https://petshop-ladingpage.vercel.app/'
  },

  {
    image: DomRicardo,
    title: "Site Dom Ricardo Hospedaria",
    description:"Site desenvolvido para o hotel Dom Ricardo, Utilizando NextJS, TypeScript e Tailwind CSS",
    url: 'https://domricardohospedaria.vercel.app/'
  },
  {
    image: EasyConnect,
    title: "Site EasyConnect Soluções Tecnológicas",
    description:"Site ficticio desenvolvido para a empresa EasyConnect, Utilizando NextJS, TypeScript e Tailwind CSS",
    url: 'https://landing-page-easy-connect.vercel.app/'
  }
  
];


const Projetos = () => {
  return (
    <section id="projetos" className="py-20 relative pt-10 scroll-mt-24">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 hover:scale-105 transition duration-300">
            <span className="text-white">Projetos</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 text-white">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 border bg-[#0B0A26]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <button className="mt-4 border rounded-xl flex items-center justify-center w-full h-12 cursor-pointer " onClick={()=>window.open(project.url,'_blank')}>
                  <p className="text-sm hover:scale-107 transition-all duration-400">Ver Projeto</p>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projetos;