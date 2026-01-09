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
    <div className="min-h-screen pt-40 pb-32 px-4 stitch-grid text-foreground/5 dark:text-foreground/2">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-24 relative z-10 text-foreground">
        
        {/* Info Column */}
        <div className="space-y-16">
          <header>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-8 bg-primary/40" />
              <span className="text-primary text-xs font-bold uppercase tracking-[0.3em]">Connect</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-9xl font-heading font-bold mb-10 uppercase tracking-tighter text-primary/10 italic leading-none"
            >
              {t.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-3xl font-medium tracking-tight leading-tight text-muted-foreground"
            >
              {t.subtitle}
            </motion.p>
          </header>
          
          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-start group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center mr-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <Mail size={24} />
              </div>
              <div className="pt-2">
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/40 mb-2">Email</h3>
                <a href="mailto:contact@rocio.dev" className="text-2xl font-bold tracking-tight hover:text-primary transition-colors">
                  contact@rocio.dev
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-start group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center mr-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <MapPin size={24} />
              </div>
              <div className="pt-2">
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/40 mb-2">{locale === "es" ? "Ubicación" : "Location"}</h3>
                <p className="text-2xl font-bold tracking-tight">Remote / Chile</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Form Column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-card/40 backdrop-blur-xl border border-primary/10 rounded-[4rem] p-16 shadow-2xl relative overflow-hidden"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10 relative z-10">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="space-y-4">
                    <FormLabel className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/40">{t.name}</FormLabel>
                    <FormControl>
                      <Input placeholder="E.g. Rocío Díaz" className="h-16 bg-transparent border-0 border-b border-primary/10 rounded-none px-0 text-xl focus-visible:ring-0 focus-visible:border-primary transition-colors" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-4">
                    <FormLabel className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/40">{t.email}</FormLabel>
                    <FormControl>
                      <Input placeholder="email@address.com" type="email" className="h-16 bg-transparent border-0 border-b border-primary/10 rounded-none px-0 text-xl focus-visible:ring-0 focus-visible:border-primary transition-colors" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="space-y-4">
                    <FormLabel className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/40">{t.message}</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder={locale === "es" ? "Cuéntame sobre tu proyecto..." : "Briefly describe your vision..."}
                        className="min-h-[200px] bg-transparent border-0 border-b border-primary/10 rounded-none px-0 text-xl focus-visible:ring-0 focus-visible:border-primary transition-colors resize-none py-4"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button type="submit" size="lg" className="w-full h-20 rounded-3xl text-xl font-bold uppercase tracking-widest shadow-2xl shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]" disabled={mutation.isPending}>
                {mutation.isPending ? (
                  <><Loader2 className="mr-3 h-6 w-6 animate-spin" /> {t.sending}</>
                ) : (
                  t.send
                )}
              </Button>
            </form>
          </Form>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        </motion.div>

      </div>
    </div>
  );
}
