import { useLocale } from "@/components/LocaleProvider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema, type CreateMessageRequest } from "@shared/schema";
import { useSubmitContact } from "@/hooks/use-contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, MapPin, Loader2 } from "lucide-react";

export default function Contact() {
  const { locale } = useLocale();
  const mutation = useSubmitContact();

  const t = {
    title: locale === "es" ? "Hablemos" : "Let's Talk",
    subtitle: locale === "es" 
      ? "Estoy disponible para nuevos proyectos. Envíame un mensaje y te responderé lo antes posible."
      : "I'm available for new projects. Send me a message and I'll get back to you as soon as possible.",
    name: locale === "es" ? "Nombre" : "Name",
    email: locale === "es" ? "Email" : "Email",
    message: locale === "es" ? "Mensaje" : "Message",
    send: locale === "es" ? "Enviar Mensaje" : "Send Message",
    sending: locale === "es" ? "Enviando..." : "Sending...",
    info: locale === "es" ? "Información de Contacto" : "Contact Info"
  };

  const form = useForm<CreateMessageRequest>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = (data: CreateMessageRequest) => {
    mutation.mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        
        {/* Info Column */}
        <div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">{t.title}</h1>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            {t.subtitle}
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-lg mr-4 text-primary">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold mb-1">Email</h3>
                <a href="mailto:contact@rocio.dev" className="text-muted-foreground hover:text-primary transition-colors">
                  contact@rocio.dev
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-lg mr-4 text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold mb-1">{locale === "es" ? "Ubicación" : "Location"}</h3>
                <p className="text-muted-foreground">Remote / Worldwide</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.name}</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" className="h-12" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.email}</FormLabel>
                    <FormControl>
                      <Input placeholder="john@example.com" type="email" className="h-12" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.message}</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder={locale === "es" ? "Cuéntame sobre tu proyecto..." : "Tell me about your project..."}
                        className="min-h-[150px] resize-none"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button type="submit" size="lg" className="w-full h-12 text-base" disabled={mutation.isPending}>
                {mutation.isPending ? (
                  <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> {t.sending}</>
                ) : (
                  t.send
                )}
              </Button>
            </form>
          </Form>
        </div>

      </div>
    </div>
  );
}
