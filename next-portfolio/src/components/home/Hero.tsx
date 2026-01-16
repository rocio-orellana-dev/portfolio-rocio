'use client';

import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section className="relative overflow-hidden">
      {/* Subtle stitch grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08] dark:opacity-[0.10]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(45,212,191,0.35) 1px, transparent 0)",
          backgroundSize: "22px 22px"
        }}
      />

      {/* Subtle gradient */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-primary/10 via-transparent to-transparent" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-20 md:grid-cols-12 md:items-center">
        {/* Left */}
        <div className="md:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-4 py-2 text-xs font-semibold text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary" />
            {t('availability')}
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl">
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              Full Stack
            </span>{' '}
            <span className="text-foreground">{t('title').replace('Full Stack ', '')}</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {t('subtitle')}
          </p>

          <p className="mt-4 text-sm text-muted-foreground">
            {t('growth')}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`/${locale}/projects`}
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:bg-primary/90 transition"
            >
              {t('ctaProjects')}
              <span className="ml-2">→</span>
            </Link>

            <Link
              href={`/${locale}/resume`}
              className="inline-flex items-center justify-center rounded-full border border-border/70 bg-card/30 px-6 py-3 text-sm font-semibold text-foreground hover:bg-card/60 transition"
            >
              {t('ctaResume')}
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="md:col-span-5">
          <div className="rounded-2xl border border-border/60 bg-card/40 p-5 shadow-soft">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-border/60 bg-muted">
                <Image
                  src="/images/profile.jpg"
                  alt="Rocío Belén Orellana Díaz"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="min-w-0">
                <div className="text-sm font-semibold text-foreground">
                  Rocío Belén Orellana Díaz
                </div>
                <div className="text-xs text-muted-foreground">
                  {t('factsTitle')}: {t('facts1')} · {t('facts2')}
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Node.js', 'MySQL'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border/60 bg-card/30 px-3 py-1 text-xs font-semibold text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
              <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-foreground">
                {t('facts3')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
