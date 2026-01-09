import { useLocale } from "@/components/LocaleProvider";
import { ProjectCard } from "@/components/ProjectCard";
import { useProjects } from "@/hooks/use-projects";
import { motion } from "framer-motion";

export default function Projects() {
  const { locale } = useLocale();
  const { data: projects, isLoading } = useProjects();

  const title = locale === "es" ? "Proyectos" : "Projects";
  const subtitle = locale === "es" 
    ? "Una selección de mis trabajos recientes en desarrollo y diseño."
    : "A collection of my recent work in development and design.";

  return (
    <div className="min-h-screen pt-40 pb-32 px-4 stitch-grid text-foreground/5 dark:text-foreground/2">
      <div className="max-w-7xl mx-auto relative z-10 text-foreground">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-8 bg-primary/40" />
              <span className="text-primary text-xs font-bold uppercase tracking-[0.3em]">Works</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-9xl font-heading font-bold mb-8 uppercase tracking-tighter text-primary/10 italic leading-none"
            >
              {title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl text-muted-foreground font-medium leading-tight tracking-tight"
            >
              {subtitle}
            </motion.p>
          </div>
        </div>

        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-96 bg-muted animate-pulse rounded-[2.5rem]" />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects?.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProjectCard
                  title={locale === "es" ? project.title_es : project.title_en}
                  summary={locale === "es" ? project.summary_es : project.summary_en}
                  tags={project.tags}
                  slug={project.slug}
                  locale={locale}
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
