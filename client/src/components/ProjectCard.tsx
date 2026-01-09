import { Link } from "wouter";
import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  summary: string;
  tags: string[];
  slug: string;
  imageUrl?: string;
  locale: "es" | "en";
}

export function ProjectCard({ title, summary, tags, slug, imageUrl, locale }: ProjectCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-card rounded-xl border border-border/50 overflow-hidden card-hover flex flex-col h-full"
    >
      <div className="relative aspect-video bg-muted overflow-hidden">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
            <span className="text-primary/20 font-heading font-bold text-4xl">RB</span>
          </div>
        )}
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
          <Link 
            href={`/${locale}/projects/${slug}`}
            className="px-6 py-3 bg-background text-foreground rounded-full font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            {locale === "es" ? "Ver Detalles" : "View Details"}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-border">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
          {summary}
        </p>
        
        <div className="pt-4 mt-auto border-t border-border/50 flex justify-between items-center">
          <Link 
            href={`/${locale}/projects/${slug}`} 
            className="text-sm font-medium text-foreground hover:text-primary flex items-center gap-1 transition-colors"
          >
            {locale === "es" ? "Leer caso de estudio" : "Read case study"}
            <ArrowRight size={14} className="ml-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
