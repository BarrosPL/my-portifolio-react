import { desc, title } from "framer-motion/client";
import { Code2, Database, Zap, Layers, FileCode, Palette,DatabaseZap,Github,Send} from "lucide-react";


const skills = [
  {
    icon: Code2,
    title: "JavaScript",
    description: "Utilização do JavaScript no desenvolvimento de aplicações web, criando funcionalidades interativas, manipulação do DOM, consumo de APIs, lógica de negócio e integração entre front-end e back-end."
  },
  {
    icon: Layers,
    title: "React",
    description: "Utilização do React para desenvolvimento de interfaces componentizadas, reutilizáveis e responsivas, gerenciamento de estado, renderização dinâmica e integração com APIs no front-end."
  },
  {
    icon: Database,
    title: "Node.js",
    description: "Utilização do Node.js para desenvolvimento backend, criação de APIs REST, regras de negócio, integração com bancos de dados, autenticação, e construção de aplicações escaláveis e performáticas."
  },
  {
    icon: Zap,
    title: "Next.js",
    description: "Utilização do Next.js para desenvolvimento de aplicações web modernas, com renderização server-side (SSR), static site generation (SSG), rotas dinâmicas, otimização de performance, SEO e integração com APIs."
  },
  {
    icon: FileCode,
    title: "TypeScript",
    description: "Utilização do TypeScript para desenvolvimento de aplicações mais seguras e escaláveis, aplicando tipagem estática, interfaces, enums e melhorando a manutenibilidade e qualidade do código."
  },
  {
    icon: Palette,
    title: "Tailwind CSS",
    description: "Utilização do Tailwind CSS para estilização de interfaces modernas e responsivas, aplicando classes utilitárias, design system consistente, alta produtividade no desenvolvimento front-end e fácil manutenção visual."
  },
  { 
    icon:DatabaseZap,
    title:"PostgreSQL",
    description:"Utilização do PostgreSQL para modelagem e gerenciamento de bancos de dados relacionais, criação de tabelas, consultas SQL, relacionamentos, índices e suporte a operações complexas"
  },
   { 
    icon:Github,
    title:"Github",
    description:"Utilização do GitHub para versionamento de código, gerenciamento de repositórios, colaboração em equipe, controle de branches, pull requests, code review e organização do fluxo de desenvolvimento de software."

  },
   { 
    icon:Send,
    title:"Postman",
    description:"Utilização do Postman para consumo, testes e validação de APIs REST, realizando requisições HTTP (GET, POST, PUT, DELETE)"
  }

];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative pt-55">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 hover:scale-105 transform transition duration-300">
            <span className="text-white ">Skills & Expertise</span>
          </h2>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="glass p-8 rounded-xl hover:scale-105 transition-all duration-300 group border bg-[#0B0A26]"
            >
              <div className="mb-4 inline-flex p-3 text-white rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                <skill.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
