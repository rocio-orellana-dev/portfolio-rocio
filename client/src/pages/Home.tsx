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
      status: "🟢 Disponible para nuevos proyectos",
      heroTitle: "Full Stack Developer enfocada en UX & Diseño",
      heroSubtitle: "Diseño y desarrollo soluciones web que combinan funcionalidad robusta con estética refinada.",
      ctaProject: "Ver Proyectos",
      ctaResume: "Descargar CV",
      whatIDo: "Lo que hago",
      services: [
        { title: "Desarrollo Frontend", desc: "Interfaces reactivas y performantes con React, TypeScript y Tailwind.", icon: <Code className="w-6 h-6 text-primary"/> },
        { title: "Diseño UI/UX", desc: "Sistemas de diseño coherentes y experiencias de usuario intuitivas.", icon: <Palette className="w-6 h-6 text-accent"/> },
        { title: "Soluciones Full Stack", desc: "Arquitecturas escalables de extremo a extremo.", icon: <Layout className="w-6 h-6 text-indigo-500"/> }
      ],
      featured: "Proyectos Destacados",
      skills: "Stack Tecnológico",
      skillsCore: "Core",
      contactTitle: "¿Tienes una idea en mente?",
      contactDesc: "Estoy siempre abierta a discutir nuevos proyectos, ideas creativas o oportunidades de ser parte de tus visiones.",
      contactCta: "Hablemos"
    },
    en: {
      status: "🟢 Available for new projects",
      heroTitle: "Full Stack Developer focused on UX & Design",
      heroSubtitle: "I design and build web solutions that combine robust functionality with refined aesthetics.",
      ctaProject: "View Projects",
      ctaResume: "Download Resume",
      whatIDo: "What I Do",
      services: [
        { title: "Frontend Development", desc: "Reactive and performant interfaces with React, TypeScript and Tailwind.", icon: <Code className="w-6 h-6 text-primary"/> },
        { title: "UI/UX Design", desc: "Coherent design systems and intuitive user experiences.", icon: <Palette className="w-6 h-6 text-accent"/> },
        { title: "Full Stack Solutions", desc: "Scalable end-to-end architectures.", icon: <Layout className="w-6 h-6 text-indigo-500"/> }
      ],
      featured: "Featured Projects",
      skills: "Tech Stack",
      skillsCore: "Core",
      contactTitle: "Have an idea in mind?",
      contactDesc: "I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.",
      contactCta: "Let's Talk"
    }
  };

  const t = content[locale];
  const featuredProjects = projects?.filter(p => p.isFeatured).slice(0, 3) || [];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 border border-primary/20"
          >
            {t.status}
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 tracking-tight text-foreground"
          >
            {t.heroTitle.split("Full Stack").map((part, i) => (
              i === 1 ? <span key={i} className="text-gradient">Full Stack</span> : part
            ))}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {t.heroSubtitle}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href={`/${locale}/projects`}>
              <Button size="lg" className="rounded-full px-8 h-12 text-base shadow-lg shadow-primary/20 hover:shadow-primary/30">
                {t.ctaProject} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base border-border bg-background hover:bg-secondary/50">
              {t.ctaResume} <FileDown className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold">{t.whatIDo}</h2>
            <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center mb-6 shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-2">{t.featured}</h2>
              <div className="w-16 h-1 bg-primary rounded-full" />
            </div>
            <Link href={`/${locale}/projects`} className="hidden md:flex items-center text-primary font-medium hover:underline">
              {locale === "es" ? "Ver todos" : "View all"} <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            
            {/* Fallback if no projects yet */}
            {(!featuredProjects || featuredProjects.length === 0) && (
              <div className="col-span-3 text-center py-12 text-muted-foreground border border-dashed border-border rounded-xl">
                 {locale === "es" ? "Cargando proyectos..." : "Loading projects..."}
              </div>
            )}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link href={`/${locale}/projects`} className="inline-flex items-center text-primary font-medium hover:underline">
              {locale === "es" ? "Ver todos los proyectos" : "View all projects"} <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Marquee (Simplified as grid) */}
      <section className="py-20 border-t border-border/50 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-heading font-bold text-center mb-12">{t.skills}</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Logos would be images, using text for now */}
            {["React", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL", "Next.js", "Figma", "Git"].map(tech => (
               <span key={tech} className="text-xl font-bold text-muted-foreground px-4 py-2 border border-border rounded-lg bg-muted/20">
                 {tech}
               </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">{t.contactTitle}</h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            {t.contactDesc}
          </p>
          <Link href={`/${locale}/contact`}>
            <Button size="lg" variant="secondary" className="rounded-full px-10 h-14 text-lg font-bold shadow-xl">
              {t.contactCta} <Send className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
