'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import CaseHighlights from '@/components/projects/CaseHighlights';
import { Project } from '@/data/projects';

type Highlights = {
  problem?: string;
  solution?: string;
  outcome?: string;
  metrics?: readonly string[];
};

type Props = {
  project: Project;
  children: React.ReactNode;
};

export default function CaseStudyLayout({ project, children }: Props) {
  const locale = useLocale();
  const t = useTranslations('case');

  const highlights: Highlights | undefined =
    project.highlights?.[locale as 'es' | 'en'];

  const items =
    highlights?.problem && highlights?.solution && highlights?.outcome
      ? [
          {
            label: 'problem' as const,
            text: highlights.problem,
          },
          {
            label: 'solution' as const,
            text: highlights.solution,
          },
          {
            label: 'outcome' as const,
            text: highlights.outcome,
            metrics: highlights.metrics,
          },
        ]
      : [];

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      {/* Header */}
      <header className="mb-10">
        <Link
          href={`/${locale}/projects`}
          className="text-sm text-muted-foreground hover:text-foreground transition"
        >
          ← {t('back')}
        </Link>

        <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
          {project.title[locale as 'es' | 'en']}
        </h1>

        {project.role?.[locale as 'es' | 'en'] && (
          <p className="mt-3 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">
              {t('role')}:
            </span>{' '}
            {project.role[locale as 'es' | 'en']}
          </p>
        )}

        {project.stack?.length ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((s: string) => (
              <span
                key={s}
                className="rounded-full border border-border/60 bg-card/30 px-3 py-1 text-xs font-semibold text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        ) : null}

        {items.length === 3 ? <CaseHighlights items={items} /> : null}
      </header>

      {/* Content */}
      <section className="prose prose-neutral max-w-none dark:prose-invert">
        {children}
      </section>
    </article>
  );
}
