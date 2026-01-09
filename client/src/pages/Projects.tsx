import { useLocale } from "@/components/LocaleProvider";
import { ProjectCard } from "@/components/ProjectCard";
import { useProjects } from "@/hooks/use-projects";
import { motion } from "framer-motion";

export default function Projects() {
  const { locale } = useLocale();
  const { data: projects, isLoading } = useProjects();

  const title = locale === "es" ? "Proyectos" : "Projects";
  const subtitle = locale === "es" 
    ? "Una colección de mis trabajos recientes en desarrollo y diseño."
    : "A collection of my recent work in development and design.";

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">{title}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">{subtitle}</p>
        </div>

        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-96 rounded-xl bg-muted animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects?.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
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
