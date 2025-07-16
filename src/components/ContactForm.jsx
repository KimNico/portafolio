"use client";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm();

  const onSubmit = async (data) => {
    // Aquí puedes usar una Server Action real o un fetch a /api/contact
    console.log("Mensaje enviado:", data);
    alert("¡Mensaje enviado! (simulado)");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
      <div>
        <label className="block mb-1 font-medium">Nombre</label>
        <input {...register("nombre", { required: true })} className="w-full px-3 py-2 rounded border focus:outline-none focus:ring" />
        {errors.nombre && <span className="text-red-500 text-xs">Este campo es obligatorio</span>}
      </div>
      <div>
        <label className="block mb-1 font-medium">Email</label>
        <input type="email" {...register("email", { required: true })} className="w-full px-3 py-2 rounded border focus:outline-none focus:ring" />
        {errors.email && <span className="text-red-500 text-xs">Ingresa un email válido</span>}
      </div>
      <div>
        <label className="block mb-1 font-medium">Mensaje</label>
        <textarea {...register("mensaje", { required: true })} className="w-full px-3 py-2 rounded border focus:outline-none focus:ring" rows={5} />
        {errors.mensaje && <span className="text-red-500 text-xs">Este campo es obligatorio</span>}
      </div>
      <button type="submit" disabled={isSubmitting} className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition">
        {isSubmitting ? "Enviando..." : "Enviar"}
      </button>
      {isSubmitSuccessful && <p className="text-green-600 mt-2">¡Mensaje enviado correctamente!</p>}
    </form>
  );
} 