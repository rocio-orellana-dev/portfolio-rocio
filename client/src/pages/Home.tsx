import { useLocale } from "@/components/LocaleProvider";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";
import { ArrowRight, Code, Layout, Palette, Send, FileDown } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useProjects } from "@/hooks/use-projects";

export default function Home() {
  const { locale } = useLocale();
  const { data: projects } = useProjects();
  
  // Static content based on locale
  const content = {
    es: {
      availability: "Disponible para práctica profesional y oportunidades junior",
      heroTitle: "Full Stack Developer enfocada en UX, sistemas y detalle",
      heroSubtitle: "Diseño y desarrollo soluciones web completas — desde la interfaz hasta la base de datos — combinando lógica, diseño y una ejecución cuidadosa para crear productos funcionales, claros y mantenibles.",
      growth: "En aprendizaje continuo: ciberseguridad, soporte TI, redes e infraestructura.",
      ctaProject: "Ver proyectos",
      ctaResume: "Descargar CV",
      quickFacts: {
        role: "Full Stack",
        focus: "UX & Systems",
        status: "Open to internship/junior"
      },
      whatIDo: "Expertise",
      services: [
        { title: "Desarrollo Frontend", desc: "Interfaces dinámicas con React/TS y Tailwind, priorizando accesibilidad y performance.", icon: <Code className="w-5 h-5 text-primary"/> },
        { title: "Arquitectura Backend", desc: "Sistemas robustos con Node.js, Express y bases de datos relacionales.", icon: <Layout className="w-5 h-5 text-primary"/> },
        { title: "Soluciones Full Stack", desc: "Integración de punta a punta con enfoque en la experiencia de usuario.", icon: <Palette className="w-5 h-5 text-primary"/> }
      ],
      howIWork: {
        title: "Workflow",
        steps: [
          { title: "Inmersión", desc: "Entender el contexto." },
          { title: "Estrategia", desc: "Planificar la lógica." },
          { title: "Ejecución", desc: "Código limpio." },
          { title: "Optimización", desc: "Iteración final." }
        ]
      },
      skills: {
        title: "Tecnologías",
        core: "Core",
        comfortable: "Comfortable",
        exploring: "Exploring",
        exploringList: ["Cybersecurity", "IT Support", "Networking", "Infrastructure"]
      },
      featured: "Proyectos seleccionados",
      contactCta: "Iniciar conversación"
    },
    en: {
      availability: "Open to internships and junior opportunities",
      heroTitle: "Full Stack Developer focused on UX, systems, and detail",
      heroSubtitle: "I design and build complete web solutions — from UI to database — combining logic, design, and careful execution to create functional, clear, and maintainable products.",
      growth: "Continuously learning: cybersecurity, IT support, networking, and infrastructure.",
      ctaProject: "View projects",
      ctaResume: "Download resume",
      quickFacts: {
        role: "Full Stack",
        focus: "UX & Systems",
        status: "Open to internship/junior"
      },
      whatIDo: "What I Do",
      services: [
        { title: "Frontend Development", desc: "React/TS/Tailwind, accessibility, performance.", icon: <Code className="w-5 h-5 text-primary"/> },
        { title: "Backend Systems", desc: "REST APIs + DB.", icon: <Layout className="w-5 h-5 text-primary"/> },
        { title: "Full Stack Solutions", desc: "End-to-end.", icon: <Palette className="w-5 h-5 text-primary"/> }
      ],
      howIWork: {
        title: "How I Work",
        steps: [
          { title: "Discover", desc: "Understand the problem." },
          { title: "Design", desc: "Plan the solution." },
          { title: "Build", desc: "Agile development." },
          { title: "Deploy", desc: "Go to production." }
        ]
      },
      skills: {
        title: "Skills with criteria",
        core: "Core",
        comfortable: "Comfortable",
        exploring: "Exploring",
        exploringList: ["Cybersecurity", "IT Support", "Networking", "Infrastructure"]
      },
      featured: "Featured Projects",
      contactCta: "Let's Talk"
    }
  };

  const t = content[locale];
  const featuredProjects = projects?.filter(p => p.isFeatured).slice(0, 3) || [];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 relative overflow-hidden stitch-grid text-foreground/5 dark:text-foreground/2">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center relative z-10 text-foreground">
          <div className="text-left">
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-8 bg-primary/40" />
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">
                {t.availability}
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-8xl font-heading font-bold mb-8 leading-[0.95] tracking-tighter"
            >
              {t.heroTitle.split("Full Stack").map((part, i) => (
                i === 1 ? <span key={i} className="text-primary italic">Full Stack</span> : part
              ))}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground mb-12 max-w-xl leading-relaxed font-medium"
            >
              {t.heroSubtitle}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-6 items-center"
            >
              <Link href={`/${locale}/projects`}>
                <Button size="lg" className="rounded-full px-10 h-14 text-base font-bold shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 transition-transform">
                  {t.ctaProject}
                </Button>
              </Link>
              <Button variant="ghost" size="lg" className="rounded-full px-10 h-14 text-base font-bold hover:bg-primary/5">
                <FileDown className="mr-2 h-5 w-5" />
                {t.ctaResume}
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 bg-card/80 backdrop-blur-xl border border-primary/10 p-2 rounded-[2.5rem] shadow-2xl overflow-hidden">
               <div className="aspect-[4/5] bg-muted rounded-[2rem] overflow-hidden grayscale contrast-125 brightness-90 hover:grayscale-0 hover:contrast-100 hover:brightness-100 transition-all duration-1000 ease-in-out">
                  <img src="/images/profile.jpg" alt="Rocío" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
               </div>
               <div className="p-8 space-y-6">
                  <div className="flex justify-between items-center border-b border-primary/5 pb-4">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground">Expertise</span>
                    <span className="text-xs font-bold text-primary italic">Full Stack Architecture</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["React", "TypeScript", "Node.js", "MySQL"].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-primary/5 text-primary rounded-full text-[9px] font-black uppercase tracking-widest border border-primary/10">
                        {tag}
                      </span>
                    ))}
                  </div>
               </div>
            </div>
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-accent/10 rounded-full blur-[100px] -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-4"
              >
                <div className="h-px w-8 bg-primary/40" />
                <span className="text-primary text-xs font-bold uppercase tracking-[0.3em]">Expertise</span>
              </motion.div>
              <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tighter leading-none">{t.whatIDo}</h2>
            </div>
            <div className="h-px flex-grow bg-primary/5 hidden md:block mb-4 mx-8" />
          </div>

          <div className="grid md:grid-cols-3 gap-1">
            {t.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card/30 backdrop-blur-sm p-12 hover:bg-primary/[0.02] transition-all duration-500 border border-primary/5 first:rounded-l-[3rem] last:rounded-r-[3rem] relative overflow-hidden"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-6 tracking-tight">{service.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed font-medium opacity-80 group-hover:opacity-100 transition-opacity">{service.desc}</p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl font-heading font-bold uppercase tracking-widest text-primary/40">{t.featured}</h2>
              <div className="w-12 h-1 bg-primary mt-4" />
            </div>
            <Link href={`/${locale}/projects`} className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">
              {locale === "es" ? "Todos los proyectos" : "All projects"}
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={locale === "es" ? project.title_es : project.title_en}
                summary={locale === "es" ? project.summary_es : project.summary_en}
                tags={project.tags}
                slug={project.slug}
                locale={locale}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="py-24 bg-muted/20 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="mb-16">
              <h2 className="text-3xl font-heading font-bold uppercase tracking-widest text-primary/40">{t.howIWork.title}</h2>
              <div className="w-12 h-1 bg-primary mt-4" />
           </div>
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {t.howIWork.steps.map((step, idx) => (
                <div key={idx} className="relative">
                   <span className="text-6xl font-heading font-bold text-primary/5 absolute -top-8 left-0">{idx + 1}</span>
                   <h3 className="text-lg font-bold mb-2 relative z-10">{step.title}</h3>
                   <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="mb-16">
              <h2 className="text-3xl font-heading font-bold uppercase tracking-widest text-primary/40">{t.skills.title}</h2>
              <div className="w-12 h-1 bg-primary mt-4" />
           </div>
           <div className="grid md:grid-cols-3 gap-16">
              <div>
                 <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6 pb-2 border-b border-border">{t.skills.core}</h3>
                 <div className="flex flex-wrap gap-2">
                    {["React", "TypeScript", "Next.js", "Tailwind"].map(s => <span key={s} className="px-3 py-1 bg-card border border-border rounded text-sm font-medium">{s}</span>)}
                 </div>
              </div>
              <div>
                 <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6 pb-2 border-b border-border">{t.skills.comfortable}</h3>
                 <div className="flex flex-wrap gap-2">
                    {["Node.js", "Express", "PostgreSQL", "MySQL", "Drizzle", "REST APIs"].map(s => <span key={s} className="px-3 py-1 bg-card border border-border rounded text-sm font-medium">{s}</span>)}
                 </div>
              </div>
              <div>
                 <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6 pb-2 border-b border-border">{t.skills.exploring}</h3>
                 <div className="flex flex-wrap gap-2">
                    {t.skills.exploringList.map(s => <span key={s} className="px-3 py-1 bg-card border border-border rounded text-sm font-medium">{s}</span>)}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-card relative overflow-hidden stitch-grid text-primary/5">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 text-foreground">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-10 leading-tight">¿Tienes una idea en mente?</h2>
          <Link href={`/${locale}/contact`}>
            <Button size="lg" className="rounded-md px-12 h-14 text-lg font-bold shadow-xl shadow-primary/10 transition-transform hover:scale-105 active:scale-95">
              {t.contactCta}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
