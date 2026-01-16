import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ThemeProvider } from 'next-themes';
import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Definición de locales soportados
const locales = ['es', 'en'] as const;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // 1. Unwrapping de params (Requerido en Next.js 16)
  const { locale } = await params;

  // 2. Validación de seguridad para rutas no soportadas
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // 3. Obtención de mensajes desde el servidor (Patrón recomendado)
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider 
            attribute="class" 
            defaultTheme="dark" 
            enableSystem 
            disableTransitionOnChange
          >
            {/* Contenedor principal con estética "Engineering Night" */}
            <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-500">
              <Navbar />

              <main className="flex-grow pt-20 relative z-10">
                {children}
              </main>

              <Footer />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}