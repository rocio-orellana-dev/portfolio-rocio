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
    <article className="min-h-screen pt-32 pb-20">
      {/* Header / Hero */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-12">
        <Link href={`/${locale}/projects`} className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> {content.back}
        </Link>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-foreground leading-tight">
          {content.title}
        </h1>
        
        <p className="text-xl text-muted-foreground leading-relaxed border-l-4 border-accent pl-6">
          {content.summary}
        </p>
      </div>

      {/* Hero Image */}
      <div className="w-full h-[400px] md:h-[600px] bg-muted mb-20 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-gray-900/10 z-10" />
         {/* Placeholder visual */}
        <div className="w-full h-full bg-gradient-to-r from-slate-800 to-slate-900 flex items-center justify-center">
            <span className="text-white/10 font-heading text-9xl font-bold">{project.title_en.charAt(0)}</span>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Sidebar Info */}
          <div className="md:col-span-1 space-y-8">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">{content.role}</h3>
              <p className="font-medium">Full Stack Developer</p>
              <p className="font-medium text-muted-foreground text-sm">UI/UX Designer</p>
            </div>
            
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">{content.stack}</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(t => (
                  <span key={t} className="text-sm border border-border px-2 py-1 rounded bg-muted/30">{t}</span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">{content.links}</h3>
              <div className="flex flex-col gap-3">
                <Button variant="outline" className="w-full justify-start">
                  <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Github className="mr-2 h-4 w-4" /> Source Code
                </Button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 prose dark:prose-invert prose-lg max-w-none">
            <h3>{content.problem}</h3>
            <p>{details.problem}</p>
            
            <h3>{content.solution}</h3>
            <p>{details.solution}</p>
            
            <div className="my-8 p-6 bg-secondary/30 rounded-xl border-l-4 border-primary">
              <h4 className="mt-0 text-primary font-bold">{content.outcome}</h4>
              <p className="mb-0">{details.outcome}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
