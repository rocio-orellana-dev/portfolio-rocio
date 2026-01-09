import { Github, Linkedin, Mail } from "lucide-react";
import { useLocale } from "./LocaleProvider";

export function Footer() {
  const { locale } = useLocale();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Rocío Belén</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              {locale === "es" 
                ? "Creando experiencias digitales que fusionan funcionalidad y estética."
                : "Crafting digital experiences that merge functionality with aesthetics."
              }
            </p>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider">
              {locale === "es" ? "Enlaces" : "Links"}
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href={`/${locale}/projects`} className="block hover:text-primary transition-colors">Projects</a>
              <a href={`/${locale}/about`} className="block hover:text-primary transition-colors">About</a>
              <a href={`/${locale}/contact`} className="block hover:text-primary transition-colors">Contact</a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider">Social</h4>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                 className="p-2 bg-background rounded-full border border-border hover:border-primary hover:text-primary transition-all">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="p-2 bg-background rounded-full border border-border hover:border-primary hover:text-primary transition-all">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@rocio.dev"
                 className="p-2 bg-background rounded-full border border-border hover:border-primary hover:text-primary transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Rocío Belén Orellana Díaz.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span>{locale === "es" ? "Hecho con ❤️ y código" : "Made with ❤️ and code"}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
