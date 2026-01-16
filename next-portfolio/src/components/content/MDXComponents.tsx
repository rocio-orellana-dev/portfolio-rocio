'use client';

import Image from 'next/image';
import ImageGrid from '@/components/content/ImageGrid';

export function useMDXComponents() {
  return {
    ImageGrid,
    h2: (props: any) => (
      <h2
        className="mt-12 mb-4 text-2xl font-semibold tracking-tight"
        {...props}
      />
    ),
    p: (props: any) => (
      <p
        className="mb-6 leading-relaxed text-neutral-700 dark:text-neutral-300"
        {...props}
      />
    ),
  };
}
