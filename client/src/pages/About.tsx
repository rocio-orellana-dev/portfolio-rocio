import { useLocale } from "@/components/LocaleProvider";
import { motion } from "framer-motion";

export default function About() {
  const { locale } = useLocale();

  const content = {
    es: {
      title: "Trayectoria",
      p1: "Full Stack Developer con enfoque en arquitectura frontend y experiencia en el ciclo completo de desarrollo web. Mi propósito es construir sistemas donde la solidez técnica y la claridad visual coexistan sin fricciones.",
      p2: "Mi proceso prioriza el orden, la escalabilidad y una profunda atención a la experiencia del usuario final. Creo en el código como una herramienta para resolver problemas reales, evitando la complejidad innecesaria y favoreciendo soluciones elegantes y mantenibles.",
      p3: "He diseñado e implementado desde sistemas de gestión académica con flujos multirol complejos hasta plataformas de e-commerce automatizadas. Cada proyecto es una oportunidad para profundizar en la intersección entre lógica de negocio y diseño centrado en el humano.",
      p4: "Esta disciplina se complementa con mi trabajo en diseño de matrices digitales, donde la precisión técnica y el detalle minucioso son fundamentales. Es una práctica que ha refinado mi paciencia y mi respeto por los procesos de construcción rigurosos.",
      p5: "Actualmente exploro nuevas fronteras en ciberseguridad, infraestructura y redes, buscando integrar estos conocimientos en el desarrollo de aplicaciones más seguras y resilientes.",
    },
    en: {
      title: "About",
      p1: "Full Stack Developer focused on frontend architecture and end-to-end web systems. My goal is to build digital products where technical robustness and visual clarity coexist seamlessly.",
      p2: "My process prioritizes structure, scalability, and deep attention to the end-user experience. I believe in code as a tool to solve real-world problems, avoiding unnecessary complexity in favor of elegant, maintainable solutions.",
      p3: "I have designed and implemented everything from academic management systems with complex multi-role flows to automated e-commerce platforms. Every project is an opportunity to explore the intersection of business logic and human-centered design.",
      p4: "This discipline is complemented by my work in digital matrix design, where technical precision and meticulous detail are paramount. This practice has refined my patience and respect for rigorous construction processes.",
      p5: "I am currently exploring new frontiers in cybersecurity, infrastructure, and networking, seeking to integrate these insights into building more secure and resilient applications.",
    }
  };

  const t = content[locale];

  return (
    <div className="min-h-screen pt-40 pb-32 px-4 stitch-grid text-foreground/5 dark:text-foreground/2">
      <div className="max-w-4xl mx-auto relative z-10 text-foreground">
        <header className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="h-px w-12 bg-primary/40" />
            <span className="text-primary text-xs font-bold uppercase tracking-[0.3em]">Story</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-heading font-bold uppercase tracking-tighter text-primary/10 italic leading-none"
          >
            {t.title}
          </motion.h1>
        </header>
        
        <div className="grid md:grid-cols-[1fr_auto] gap-16 items-start">
          <div className="space-y-12">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-foreground text-3xl md:text-4xl font-medium tracking-tight leading-tight"
            >
              {t.p1}
            </motion.p>
            
            <div className="grid md:grid-cols-2 gap-10 text-muted-foreground leading-relaxed">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg border-l border-primary/20 pl-6"
              >
                {t.p2}
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg border-l border-primary/20 pl-6"
              >
                {t.p3}
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-card/40 backdrop-blur-sm border border-primary/10 p-12 rounded-[2rem] text-muted-foreground text-lg leading-relaxed shadow-inner"
            >
              <p className="mb-6 italic">{t.p4}</p>
              <div className="flex items-center gap-4 pt-6 border-t border-primary/5">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                  <span className="text-xs font-black">NEXT</span>
                </div>
                <p className="text-primary font-bold tracking-tight">{t.p5}</p>
              </div>
            </motion.div>
          </div>

          <div className="hidden md:block sticky top-40 w-px h-64 bg-gradient-to-b from-primary/40 to-transparent" />
        </div>
      </div>
    </div>
  );
}
