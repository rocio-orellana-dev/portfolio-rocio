import { useLocale } from "@/components/LocaleProvider";
import { Construction } from "lucide-react";

export default function Embroidery() {
  const { locale } = useLocale();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-6">
        <Construction className="w-10 h-10 text-muted-foreground" />
      </div>
      <h1 className="text-3xl font-heading font-bold mb-4">
        {locale === "es" ? "Laboratorio de Matricería" : "Embroidery Lab"}
      </h1>
      <p className="text-muted-foreground max-w-md">
        {locale === "es" 
          ? "Esta sección está bajo construcción. Pronto podrás ver mi colección de diseños de bordado."
          : "This section is under construction. Soon you will see my collection of embroidery designs."
        }
      </p>
    </div>
  );
}
