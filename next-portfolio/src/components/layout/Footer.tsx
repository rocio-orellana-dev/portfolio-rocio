import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations('footer');

  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="text-sm text-muted-foreground">
          © 2026 <span className="text-foreground">Rocío Belén Orellana Díaz</span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`mailto:rocio.orellana.ing@gmail.com`}
            className="rounded-md border border-border/70 px-3 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground hover:border-border transition"
          >
            {t('email')}
          </a>
          <a
            href="#"
            className="rounded-md border border-border/70 px-3 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground hover:border-border transition"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="rounded-md border border-border/70 px-3 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground hover:border-border transition"
          >
            GitHub
          </a>
          <Link
            href={`/${locale}/contact`}
            className="rounded-md bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition"
          >
            {t('contact')}
          </Link>
        </div>
      </div>
    </footer>
  );
}
