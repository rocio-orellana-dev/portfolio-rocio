'use client';

import { MDXProvider } from '@mdx-js/react';
import { useMDXComponents } from './MDXComponents';

type Props = {
  children: React.ReactNode;
};

export default function MDXRenderer({ children }: Props) {
  const components = useMDXComponents();

  return (
    <MDXProvider components={components}>
      {children}
    </MDXProvider>
  );
}
