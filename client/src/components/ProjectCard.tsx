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
      className="group bg-card/40 backdrop-blur-sm rounded-[2.5rem] border border-primary/5 overflow-hidden transition-all duration-700 hover:bg-primary/[0.02] hover:border-primary/20 flex flex-col h-full shadow-2xl shadow-primary/[0.02]"
    >
      <div className="relative aspect-[16/10] bg-muted overflow-hidden">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale brightness-90 contrast-125 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-1000">
            <span className="text-primary/10 font-heading font-bold text-7xl italic leading-none">RB</span>
          </div>
        )}
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
          <Link 
            href={`/${locale}/projects/${slug}`}
            className="px-8 py-4 bg-background text-foreground rounded-full font-bold uppercase tracking-widest text-[10px] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-2xl"
          >
            {locale === "es" ? "Explorar Proyecto" : "Explore Project"}
          </Link>
        </div>
      </div>

      <div className="p-10 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-[10px] font-black px-3 py-1 rounded-full bg-primary/5 text-primary border border-primary/10 uppercase tracking-widest">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-2xl font-heading font-bold mb-4 group-hover:text-primary transition-colors tracking-tight leading-tight">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow opacity-80 group-hover:opacity-100 transition-opacity">
          {summary}
        </p>
        
        <div className="pt-6 mt-auto border-t border-primary/5 flex justify-between items-center">
          <Link 
            href={`/${locale}/projects/${slug}`} 
            className="text-[10px] font-black text-primary uppercase tracking-[0.2em] flex items-center gap-2 group/link"
          >
            {locale === "es" ? "Ver Detalles" : "Case Study"}
            <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
