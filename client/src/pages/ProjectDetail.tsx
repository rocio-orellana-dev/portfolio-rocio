import { useLocale } from "@/components/LocaleProvider";
import { useProject } from "@/hooks/use-projects";
import { Link, useRoute } from "wouter";
import { ArrowLeft, ExternalLink, Github, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectDetail() {
  const { locale } = useLocale();
  const [match, params] = useRoute("/:locale/projects/:slug");
  const slug = params?.slug || "";
  
  const { data: project, isLoading, error } = useProject(slug);

  if (isLoading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (error || !project) return <div className="min-h-screen flex items-center justify-center">Project not found</div>;

  const content = {
    title: locale === "es" ? project.title_es : project.title_en,
    summary: locale === "es" ? project.summary_es : project.summary_en,
    back: locale === "es" ? "Volver a proyectos" : "Back to projects",
    role: locale === "es" ? "Rol" : "Role",
    stack: locale === "es" ? "Tecnologías" : "Tech Stack",
    links: locale === "es" ? "Enlaces" : "Links",
    problem: locale === "es" ? "El Desafío" : "The Challenge",
    solution: locale === "es" ? "La Solución" : "The Solution",
    outcome: locale === "es" ? "Resultados" : "The Outcome",
  };

  // Mock content blocks since these aren't in DB schema yet
  const details = {
    problem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    solution: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    outcome: "Increased user engagement by 40% and reduced load times by 2s."
  };

  return (
    <article className="min-h-screen pt-40 pb-32 stitch-grid text-foreground/5 dark:text-foreground/2">
      {/* Header / Hero */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-24 relative z-10 text-foreground">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link href={`/${locale}/projects`} className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.3em] text-primary/60 hover:text-primary mb-12 transition-colors group">
            <ArrowLeft className="mr-2 h-3 w-3 group-hover:-translate-x-1 transition-transform" /> {content.back}
          </Link>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {project.tags.map(tag => (
            <span key={tag} className="px-4 py-1.5 rounded-full bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/10">
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-9xl font-heading font-bold mb-10 leading-[0.9] tracking-tighter italic text-primary/20 uppercase"
        >
          {content.title}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-4xl text-foreground font-medium leading-tight tracking-tight max-w-4xl"
        >
          {content.summary}
        </motion.p>
      </div>

      {/* Hero Image Container */}
      <div className="max-w-7xl mx-auto px-4 mb-32">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="w-full h-[500px] md:h-[800px] bg-card border border-primary/10 rounded-[4rem] overflow-hidden relative shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10 z-10 mix-blend-overlay" />
          <div className="w-full h-full bg-gradient-to-r from-slate-900 to-black flex items-center justify-center">
              <span className="text-primary/5 font-heading text-[30vw] font-black italic leading-none">{project.title_en.charAt(0)}</span>
          </div>
        </motion.div>
      </div>

      {/* Content Grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-foreground">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-24">
          {/* Sidebar Info */}
          <div className="space-y-16">
            <section>
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/40 mb-6 pb-4 border-b border-primary/5">{content.role}</h3>
              <div className="space-y-2">
                <p className="text-xl font-bold tracking-tight">Full Stack Developer</p>
                <p className="text-muted-foreground font-medium italic">UX Strategy & Logic</p>
              </div>
            </section>
            
            <section>
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/40 mb-6 pb-4 border-b border-primary/5">{content.stack}</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(t => (
                  <span key={t} className="text-xs font-bold border border-primary/5 px-3 py-1 rounded-lg bg-card/50 text-muted-foreground">{t}</span>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/40 mb-6 pb-4 border-b border-primary/5">{content.links}</h3>
              <div className="grid grid-cols-1 gap-4">
                <Button size="lg" className="rounded-2xl h-14 font-bold shadow-xl shadow-primary/10">
                  <ExternalLink className="mr-3 h-5 w-5" /> Visit Site
                </Button>
                <Button variant="outline" size="lg" className="rounded-2xl h-14 font-bold hover:bg-primary/5">
                  <Github className="mr-3 h-5 w-5" /> Repository
                </Button>
              </div>
            </section>
          </div>

          {/* Main Content */}
          <div className="space-y-24">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-10">{content.problem}</h3>
              <p className="text-2xl text-muted-foreground leading-relaxed font-medium tracking-tight italic">{details.problem}</p>
            </motion.section>
            
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-10">{content.solution}</h3>
              <p className="text-xl text-muted-foreground leading-relaxed font-medium">{details.solution}</p>
            </motion.section>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-16 bg-primary/5 rounded-[3rem] border border-primary/10 relative overflow-hidden"
            >
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-6">{content.outcome}</h4>
              <p className="text-3xl font-bold tracking-tight text-foreground leading-tight">{details.outcome}</p>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </article>
  );
}
