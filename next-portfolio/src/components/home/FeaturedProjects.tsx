'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { projects } from '@/data/projects';

export default function FeaturedProjects() {
  const t = useTranslations('projects');
  const locale = useLocale();

  const featured = [...projects].sort((a, b) => a.featuredOrder - b.featuredOrder);

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="flex items-end justify-between gap-6">
        <h2 className="text-2xl font-semibold">{t('featured')}</h2>
        <Link
          href={`/${locale}/projects`}
          className="text-sm font-semibold text-primary hover:underline"
        >
          {t('viewAll')} →
        </Link>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {featured.map((p) => (
          <article
            key={p.id}
            className="group overflow-hidden rounded-2xl border border-border/60 bg-card/40 shadow-soft transition hover:shadow-glow"
          >
            <div className="relative aspect-16/10">
              <Image
                src={p.cover}
                alt={p.title[locale as 'es' | 'en']}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                {p.stack.slice(0, 3).map((tag: string) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs font-semibold text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5">
              <h3 className="text-lg font-semibold leading-snug">{p.title[locale as 'es' | 'en']}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{p.summary[locale as 'es' | 'en']}</p>

              <Link
                href={`/${locale}/projects/${p.slug[locale as 'es' | 'en']}`}
                className="mt-4 inline-flex text-sm font-semibold text-primary hover:underline"
              >
                {t('viewCase')} →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
