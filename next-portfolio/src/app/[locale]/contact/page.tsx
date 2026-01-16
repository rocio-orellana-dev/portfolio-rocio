export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6">Contacto</h1>
      <p className="mb-8 text-muted-foreground">¿Tienes algún proyecto en mente o quieres charlar sobre tecnología?</p>
      <div className="grid gap-4">
        <div className="p-4 border rounded-lg hover:bg-accent transition-colors">
          <h2 className="font-semibold">Email</h2>
          <p>tu-correo@ejemplo.com</p>
        </div>
        <div className="p-4 border rounded-lg hover:bg-accent transition-colors">
          <h2 className="font-semibold">LinkedIn</h2>
          <p>linkedin.com/in/tu-usuario</p>
        </div>
      </div>
    </div>
  );
}