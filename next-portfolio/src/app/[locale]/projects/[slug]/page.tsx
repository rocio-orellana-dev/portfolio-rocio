import { notFound } from 'next/navigation';
import CaseStudyLayout from '@/components/projects/CaseStudyLayout';
import MDXRenderer from '@/components/content/MDXRenderer';
import { projects } from '@/data/projects';

async function loadMdx(locale: string, slug: string) {
  try {
    const mod = await import(`@/content/projects/${locale}/${slug}.mdx`);
    return mod;
  } catch {
    return null;
  }
}

export default async function ProjectCasePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  // 🔑 CLAVE
  const { locale, slug } = await params;

  const project = projects.find(
    (p) => p.slug[locale as 'es' | 'en'] === slug
  );
  if (!project) notFound();

  const mdxModule = await loadMdx(locale, slug);
  if (!mdxModule) notFound();

  const Content = mdxModule.default;

  return (
    <CaseStudyLayout project={project}>
      <MDXRenderer>
        <Content />
      </MDXRenderer>
    </CaseStudyLayout>
  );
}
