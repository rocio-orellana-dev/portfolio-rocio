export default function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Currículum</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Educación</h2>
        <div>
          <h3 className="font-bold">Ingeniería en Informática</h3>
          <p className="text-muted-foreground text-sm">En progreso</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Certificaciones</h2>
        <ul className="list-disc ml-5 space-y-2">
          <li>AWS Cloud Certification (en proceso/completado)</li>
          <li>Desarrollo Front-end Moderno</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Habilidades</h2>
        <div className="flex flex-wrap gap-2">
          {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Git'].map(skill => (
            <span key={skill} className="px-3 py-1 bg-secondary rounded-full text-sm">{skill}</span>
          ))}
        </div>
      </section>
    </div>
  );
}