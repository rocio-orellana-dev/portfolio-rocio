'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const navItems = [
  { key: 'projects', href: '/projects' },
  { key: 'about', href: '/about' },
  { key: 'embroidery', href: '/embroidery-lab' },
  { key: 'notes', href: '/notes' },
  { key: 'resume', href: '/resume' },
  { key: 'contact', href: '/contact' },
];

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleLocale = () => {
    const newLocale = locale === 'es' ? 'en' : 'es';
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <Link href={`/${locale}`} className="leading-tight">
          <div className="text-sm font-semibold tracking-tight text-foreground">
            Rocío Belén
          </div>
          <div className="text-xs tracking-[0.22em] text-muted-foreground">
            ORELLANA DÍAZ
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <li key={item.key}>
              <Link
                href={`/${locale}${item.href}`}
                className="text-sm text-muted-foreground hover:text-foreground transition"
              >
                {t(item.key)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Language */}
          <button
            onClick={toggleLocale}
            className="hidden rounded-md border border-border/70 px-3 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground hover:border-border transition md:inline-flex"
            aria-label="Toggle language"
          >
            ES / EN
          </button>

          {/* Theme */}
          <button
            onClick={() => mounted && setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-md border border-border/70 px-3 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground hover:border-border transition"
            aria-label="Toggle theme"
          >
            {mounted ? (theme === 'dark' ? '☀︎' : '☾') : '…'}
          </button>

          {/* Mobile menu */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden rounded-md border border-border/70 px-3 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground hover:border-border transition"
            aria-label="Open menu"
          >
            {open ? t('close') : t('menu')}
          </button>
        </div>
      </nav>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/90 backdrop-blur">
          <div className="mx-auto max-w-7xl px-6 py-4">
            <div className="mb-3 flex items-center justify-between">
              <button
                onClick={toggleLocale}
                className="rounded-md border border-border/70 px-3 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground hover:border-border transition"
              >
                ES / EN
              </button>
              <button
                onClick={() => mounted && setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="rounded-md border border-border/70 px-3 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground hover:border-border transition"
              >
                {mounted ? (theme === 'dark' ? '☀︎' : '☾') : '…'}
              </button>
            </div>

            <ul className="grid gap-2">
              {navItems.map((item) => (
                <li key={item.key}>
                  <Link
                    href={`/${locale}${item.href}`}
                    className="block rounded-lg border border-border/50 bg-card/40 px-4 py-3 text-sm text-foreground hover:bg-card/70 transition"
                    onClick={() => setOpen(false)}
                  >
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
