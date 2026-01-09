import { createContext, useContext, ReactNode, useEffect } from "react";
import { useLocation } from "wouter";

type Locale = "es" | "en";

interface LocaleContextType {
  locale: Locale;
  setLocale: (lang: Locale) => void;
  t: (key: string) => string; // Simple translation helper placeholder
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}

interface LocaleProviderProps {
  children: ReactNode;
}

export function LocaleProvider({ children }: LocaleProviderProps) {
  const [location, setLocation] = useLocation();
  
  // Extract locale from URL path (e.g., /en/about -> en)
  const pathParts = location.split("/").filter(Boolean);
  const currentLocale = (pathParts[0] === "en" || pathParts[0] === "es") 
    ? pathParts[0] as Locale 
    : "es"; // Default to ES

  const setLocale = (lang: Locale) => {
    // Replace the first segment of the path with the new locale
    const newPath = location.replace(`/${currentLocale}`, `/${lang}`);
    
    // Handle root case where path might not have locale yet
    if (newPath === location && !location.startsWith(`/${lang}`)) {
       setLocation(`/${lang}${location === '/' ? '' : location}`);
    } else {
       setLocation(newPath);
    }
  };

  // Basic translation placeholder - normally this would be a full i18n lib
  // For this portfolio, we will handle most content via conditional rendering in pages
  const t = (key: string) => key; 

  // Redirect root to default locale if needed
  useEffect(() => {
    if (location === "/") {
      setLocation("/es");
    }
  }, [location, setLocation]);

  return (
    <LocaleContext.Provider value={{ locale: currentLocale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}
