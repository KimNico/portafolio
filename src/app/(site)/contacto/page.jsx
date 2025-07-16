import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contacto | Portafolio de Tu Nombre",
  description: "Formulario de contacto para consultas profesionales.",
};

export default function ContactoPage() {
  return (
    <section className="py-12 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contacto</h1>
      <ContactForm />
    </section>
  );
} 