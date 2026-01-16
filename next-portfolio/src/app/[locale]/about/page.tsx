import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('About');

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6 text-foreground">Sobre Mí</h1>
      <div className="prose dark:prose-invert">
        <p className="text-lg text-muted-foreground">
          Soy estudiante de Ingeniería en Informática con una gran pasión por el desarrollo front-end y la creación de interfaces modernas.
        </p>
        <p className="mt-4">
          Mi enfoque se centra en el aprendizaje continuo en TI y en aplicar tecnologías como React y Next.js para resolver problemas reales.
        </p>
      </div>
    </div>
  );
}