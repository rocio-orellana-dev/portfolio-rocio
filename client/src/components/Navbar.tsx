import { Link, useLocation } from "wouter";
import { useLocale } from "./LocaleProvider";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const { locale, setLocale } = useLocale();
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: locale === "es" ? "Proyectos" : "Projects", href: `/${locale}/projects` },
    { label: locale === "es" ? "Sobre mí" : "About", href: `/${locale}/about` },
    { label: locale === "es" ? "Matricería" : "Embroidery Lab", href: `/${locale}/embroidery` },
    { label: locale === "es" ? "Notas" : "Notes", href: `/${locale}/notes` },
    { label: locale === "es" ? "CV" : "Resume", href: `/${locale}/resume` },
    { label: locale === "es" ? "Contacto" : "Contact", href: `/${locale}/contact` },
  ];

  const toggleLocale = () => {
    const newLang = locale === "es" ? "en" : "es";
    setLocale(newLang);
  };

  return (
    <header className="fixed top-0 w-full z-50 glass-nav transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo / Brand */}
          <Link href={`/${locale}`} className="flex items-center group">
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg tracking-tight group-hover:text-primary transition-colors">
                Rocío Belén
              </span>
              <span className="font-sans text-xs text-muted-foreground tracking-widest uppercase">
                Orellana Díaz
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary relative py-1
                  ${location === item.href ? "text-primary font-semibold" : "text-foreground/80"}
                `}
              >
                {item.label}
                {location === item.href && (
                  <motion.div 
                    layoutId="underline"
                    className="absolute left-0 right-0 bottom-0 h-0.5 bg-accent" 
                  />
                )}
              </Link>
            ))}
            
            <div className="h-6 w-px bg-border/60 mx-2" />
            
            <button 
              onClick={toggleLocale}
              className="text-xs font-mono font-bold tracking-wider hover:text-primary transition-colors uppercase"
            >
              <span className={locale === "es" ? "text-primary underline underline-offset-4" : "text-muted-foreground"}>ES</span>
              <span className="text-muted-foreground mx-1">/</span>
              <span className={locale === "en" ? "text-primary underline underline-offset-4" : "text-muted-foreground"}>EN</span>
            </button>

            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 rounded-md text-base font-medium transition-colors
                    ${location === item.href ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"}
                  `}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-border mt-4 px-3 flex items-center justify-between">
                <span className="text-sm text-muted-foreground uppercase tracking-widest font-bold">Language</span>
                <button 
                  onClick={toggleLocale}
                  className="font-mono text-sm font-bold bg-muted px-4 py-2 rounded-md hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  {locale === "es" ? "Switch to English" : "Cambiar a Español"}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
