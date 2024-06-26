"use client"
import Image from "next/image"
import { FormEvent } from "react"
import { HTMLInputTypeAttribute } from "react"
import { alert } from "../../components/ui/alert" 
import { useState } from 'react';

export default function Empresa() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Extraer los datos del formulario
    const formData = new FormData(e.currentTarget);
    const name_company = formData.get('name_company');
    const nit = formData.get('nit');
    const name_contact = formData.get('name_contact');
    const tel = formData.get('tel');
    const email = formData.get('email');

    const data = {
      full_name: name_company,
      nit: nit,
      name_contact: name_contact,
      phone: tel,
      mail: email,
    };

    try {
      // Realizar la solicitud POST al backend
      const response = await fetch('/api/Empresas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // Verificar si la solicitud fue exitosa
      if (response.ok) {
        console.log('Datos enviados correctamente');
        alert('Registro exitoso', 'Sus datos se almacenaron correctamente', 'success');
      } else {
        console.error('Error al enviar los datos:', response.statusText);
        alert(
          'Registro fallido',
          'Sus datos no se almacenaron correctamente, por favor verifique sus datos y reenvíe el formulario',
          'error'
        );
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      alert('Error interno', 'Error al procesar la solicitud', 'error');
    }
  };

  return (
    <div className="grid grid-rows-[auto_1fr] md:grid-rows-1 md:grid-cols-2 place-items-center w-full h-full bg-lime">
      <section className="py-5 h-full w-full flex flex-col justify-around items-center">
        <h2 className="text-rose text-2xl text-center font-bold max-w-md mb-5 sm:text-3xl md:text-4xl xl:text-5xl z-10">
          Soy Empresa y tengo empleados
        </h2>
        <figure className="relative w-full min-h-40 flex-grow">
          <Image src="https://neggo.my.canva.site/images/9f9e562e2ea842f7132cd0ef59605967.svg" fill={true} alt="Marketing img" />
        </figure>
      </section>

      <section className="w-full h-full sm:w-[90%]">
        <div className="flex flex-col gap-5 justify-center items-center bg-white h-full py-5">
          <h2 className="text-rose text-lg font-bold text-center">¡Seras el primero o la primera en saber!</h2>
          <form onSubmit={handleSubmit} className="flex-grow flex flex-col justify-between items-center gap-2 py-3">
            <Input label="NOMBRE DE LA EMPRESA" name="name_company" />
            <Input label="NIT DE LA EMPRESA" name="nit" />
            <Input label="NOMBRE DEL CONTACTO" name="name_contact" />
            <Input label="CELULAR DEL CONTACTO" type="tel" name="tel" />
            <Input label="CORREO DE LA EMPRESA" type="email" name="email" />
            <label className="flex items-center">
              <input type="checkbox" onChange={handleCheckboxChange} className="mr-2" />
              <a href="/TyC" className="text-sm">Acepto los <strong >términos y condiciones</strong></a>
            </label>
            <button disabled={!isChecked} className={`bg-rose w-[50%] text-white rounded-2xl hover:bg-rose/75 hover:scale-105 transition ${isChecked ? '' : 'opacity-50 cursor-not-allowed'}`}>
              ENVIAR
            </button>
          </form>
          <span className="text-rose text-sm font-semibold">¡Pronto nos comunicaremos contigo!</span>
        </div>
      </section>
    </div>
  );
}

const Input = ({ label, type, name }: { label: string; name: string; type?: HTMLInputTypeAttribute }) => {
  return (
    <label className="text-sm text-gray-500 w-[80%]">
      <span className="pl-3">{label}</span>
      <input type={type} name={name} className="w-full rounded-3xl py-1 bg-gray-300" />
    </label>
  );
};
