import { useLocale } from "@/components/LocaleProvider";

export default function About() {
  const { locale } = useLocale();

  const content = {
    es: {
      title: "Sobre mí",
      p1: "Soy Rocío, desarrolladora Full Stack con una pasión profunda por el diseño de experiencias de usuario. Mi enfoque combina la lógica técnica con la sensibilidad visual.",
      p2: "Con experiencia en tecnologías modernas como React y Node.js, busco crear aplicaciones que no solo funcionen perfectamente, sino que también se sientan bien al usarlas.",
      exp: "Experiencia"
    },
    en: {
      title: "About Me",
      p1: "I'm Rocío, a Full Stack Developer with a deep passion for user experience design. My approach combines technical logic with visual sensibility.",
      p2: "With experience in modern technologies like React and Node.js, I aim to build applications that not only work perfectly but also feel great to use.",
      exp: "Experience"
    }
  };

  const t = content[locale];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8">{t.title}</h1>
        
        <div className="prose dark:prose-invert prose-lg mb-16">
          <p className="lead text-xl text-muted-foreground">{t.p1}</p>
          <p>{t.p2}</p>
        </div>

        <h2 className="text-2xl font-heading font-bold mb-8 flex items-center">
          {t.exp} <div className="ml-4 h-px bg-border flex-grow" />
        </h2>

        <div className="space-y-12">
          {/* Timeline Item 1 */}
          <div className="relative pl-8 border-l-2 border-border">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
            <h3 className="text-lg font-bold">Freelance Full Stack Developer</h3>
            <span className="text-sm text-muted-foreground block mb-2">2023 - Present</span>
            <p className="text-muted-foreground">Developing custom web solutions for diverse clients focusing on React and modern CSS.</p>
          </div>
          
           {/* Timeline Item 2 */}
           <div className="relative pl-8 border-l-2 border-border">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-muted border-4 border-background" />
            <h3 className="text-lg font-bold">Frontend Intern</h3>
            <span className="text-sm text-muted-foreground block mb-2">2022 - 2023</span>
            <p className="text-muted-foreground">Collaborated on UI component libraries and responsive layouts.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
