import { Code2, Database, Zap, Layers, FileCode, Palette } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "JavaScript",
    description: "Desenvolvimento de aplicações web modernas e interativas"
  },
  {
    icon: Layers,
    title: "React",
    description: "Criação de interfaces de usuário dinâmicas e componentizadas"
  },
  {
    icon: Database,
    title: "Node.js",
    description: "Desenvolvimento backend e criação de APIs"
  },
  {
    icon: Zap,
    title: "Next.js",
    description: "Framework React para aplicações web performáticas"
  },
  {
    icon: FileCode,
    title: "TypeScript",
    description: "JavaScript tipado para código mais robusto e seguro"
  },
  {
    icon: Palette,
    title: "Tailwind CSS",
    description: "Estilização moderna com utility-first CSS framework"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative pt-50">
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
