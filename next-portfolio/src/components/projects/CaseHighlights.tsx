'use client';

import { useTranslations } from 'next-intl';

export type Highlight = {
  label: 'problem' | 'solution' | 'outcome';
  text: string;
  metrics?: readonly string[];
};

type Props = {
  items: Highlight[];
};

export default function CaseHighlights({ items }: Props) {
  const t = useTranslations('caseHighlights');

  const labelMap: Record<Highlight['label'], string> = {
    problem: t('problem'),
    solution: t('solution'),
    outcome: t('outcome'),
  };

  return (
    <div className="mt-8 grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-border/60 bg-card/40 p-4 shadow-soft"
        >
          <p className="text-xs font-semibold tracking-wide text-primary">
            {labelMap[item.label]}
          </p>

          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {item.text}
          </p>

          {item.label === 'outcome' && item.metrics?.length ? (
            <div className="mt-4">
              <p className="text-xs font-semibold tracking-wide text-muted-foreground">
                {t('metrics')}
              </p>

              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                {item.metrics.slice(0, 3).map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
