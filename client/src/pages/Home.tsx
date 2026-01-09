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
      whatIDo: "Qué hago",
      services: [
        { title: "Desarrollo Frontend", desc: "React/TS/Tailwind, accesibilidad, performance.", icon: <Code className="w-5 h-5 text-primary"/> },
        { title: "Sistemas Backend", desc: "APIs REST + DB.", icon: <Layout className="w-5 h-5 text-primary"/> },
        { title: "Soluciones Full Stack", desc: "End-to-end.", icon: <Palette className="w-5 h-5 text-primary"/> }
      ],
      howIWork: {
        title: "Cómo trabajo",
        steps: [
          { title: "Descubrir", desc: "Entender el problema." },
          { title: "Diseñar", desc: "Planificar la solución." },
          { title: "Construir", desc: "Desarrollo ágil." },
          { title: "Desplegar", desc: "Puesta en producción." }
        ]
      },
      skills: {
        title: "Skills con criterio",
        core: "Core",
        comfortable: "Comfortable",
        exploring: "Exploring",
        exploringList: ["Cybersecurity", "IT Support", "Networking", "Infrastructure"]
      },
      featured: "Proyectos destacados",
      contactCta: "Hablemos"
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
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10 text-foreground">
          <div className="text-left">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary text-sm font-semibold mb-4 uppercase tracking-wider"
            >
              {t.availability}
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-[1.1]"
            >
              {t.heroTitle.split("Full Stack").map((part, i) => (
                i === 1 ? <span key={i} className="text-gradient">Full Stack</span> : part
              ))}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground mb-4 max-w-xl leading-relaxed"
            >
              {t.heroSubtitle}
            </motion.p>

            <motion.p
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
               className="text-sm italic text-muted-foreground mb-10"
            >
              {t.growth}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link href={`/${locale}/projects`}>
                <Button size="lg" className="rounded-md px-8 h-12 text-base">
                  {t.ctaProject}
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="rounded-md px-8 h-12 text-base">
                {t.ctaResume}
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="bg-card border border-border p-8 rounded-2xl shadow-sm relative overflow-hidden">
               <div className="aspect-square bg-muted rounded-xl mb-6 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <img src="/images/profile.jpg" alt="Rocío" className="w-full h-full object-cover" />
               </div>
               <div className="space-y-4">
                  <h3 className="font-heading font-bold text-xl uppercase tracking-widest text-primary/80">Quick facts</h3>
                  <div className="grid grid-cols-1 gap-2 text-sm text-muted-foreground">
                    <div className="flex justify-between border-b border-border/50 pb-2">
                       <span>Role</span>
                       <span className="font-bold text-foreground">{t.quickFacts.role}</span>
                    </div>
                    <div className="flex justify-between border-b border-border/50 pb-2">
                       <span>Focus</span>
                       <span className="font-bold text-foreground">{t.quickFacts.focus}</span>
                    </div>
                    <div className="flex justify-between">
                       <span>Status</span>
                       <span className="font-bold text-foreground text-xs">{t.quickFacts.status}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {["React", "TypeScript", "Node", "MySQL"].map(tag => (
                      <span key={tag} className="px-2 py-1 bg-muted rounded text-[10px] font-bold uppercase tracking-tighter">
                        {tag}
                      </span>
                    ))}
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-card/50 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-heading font-bold uppercase tracking-widest text-primary/40">{t.whatIDo}</h2>
            <div className="w-12 h-1 bg-primary mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group bg-card p-10 rounded-xl border border-border/50 hover:border-primary/30 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center mb-8 group-hover:bg-primary/5 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
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
