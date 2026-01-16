import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  const t = useTranslations('projectsPage');
  const locale = useLocale();

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-3xl font-semibold">{t('title')}</h1>
      <p className="mt-3 text-muted-foreground">{t('subtitle')}</p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.id}
            className="rounded-2xl border border-border/60 bg-card/40 p-6 shadow-soft hover:shadow-glow transition"
          >
            <h2 className="font-semibold">
              {p.title[locale as 'es' | 'en']}
            </h2>

            <p className="mt-2 text-sm text-muted-foreground">
              {p.summary[locale as 'es' | 'en']}
            </p>

            {p.stack?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.slice(0, 5).map((tag: string) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border/60 bg-card/30 px-3 py-1 text-xs font-semibold text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}

            <Link
              href={`/${locale}/projects/${p.slug[locale as 'es' | 'en']}`}
              className="mt-4 inline-flex text-sm font-semibold text-primary hover:underline"
            >
              {t('viewCase')} →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
