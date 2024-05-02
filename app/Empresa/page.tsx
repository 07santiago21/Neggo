"use client"

import Image from "next/image"
import { ChangeEvent, HTMLInputTypeAttribute } from "react"
import { useState } from "react"

export default function Empresa() {
  const [formData, setFormData] = useState({
    empresa: "",
    nit: "",
    contacto: "",
    celular: "",
    correo: ""
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response = await fetch("/api/empresas/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Handle success
        console.log("Form data submitted successfully");
      } else {
        // Handle error
        console.error("Failed to submit form data");
      }
    } catch (error) {
      console.error("An error occurred while submitting form data:", error);
    }
  };

  // return (
  //   <div className="grid grid-rows-[auto_1fr] md:grid-rows-1 md:grid-cols-2 place-items-center w-full h-full bg-lime">
  //     {/* ... */}
  //     <section className="w-full h-full sm:w-[90%]">
  //       <div className="flex flex-col gap-5 justify-center items-center bg-white h-full py-5">
  //         <h2 className="text-rose text-lg font-bold text-center">¡Seras el primero o la primera en saber!</h2>
  //         <form onSubmit={handleSubmit} className="flex-grow flex flex-col justify-between items-center gap-2 py-3">
  //           <Input label="NOMBRE DE LA EMPRESA" name="empresa" value={formData.empresa} onChange={handleInputChange} />
  //           <Input label="NIT DE LA EMPRESA" name="nit" value={formData.nit} onChange={handleInputChange} />
  //           <Input label="NOMBRE DEL CONTACTO" name="contacto" value={formData.contacto} onChange={handleInputChange} />
  //           <Input label="CELULAR DEL CONTACTO" name="celular" value={formData.celular} onChange={handleInputChange} type="tel" />
  //           <Input label="CORREO DE LA EMPRESA" name="correo" value={formData.correo} onChange={handleInputChange} type="email" />
  //           <button type="submit" className="bg-rose w-[50%] text-white rounded-2xl hover:bg-rose/75 hover:scale-105 transition">ENVIAR</button>
  //         </form>
  //         <span className="text-rose text-sm font-semibold">¡Pronto nos comunicaremos contigo!</span>
  //       </div>
  //     </section>
  //   </div>
  // );
  return (
    <div className="grid grid-rows-[auto_1fr] md:grid-rows-1 md:grid-cols-2 place-items-center w-full h-full bg-lime" >
      <section className="py-5 h-full w-full flex flex-col justify-around items-center">
        <h2 className="text-rose text-2xl text-center font-bold max-w-md mb-5 sm:text-3xl md:text-4xl xl:text-5xl z-10">Soy Empresa y tengo empleados</h2>
        <figure className="relative w-full min-h-40 flex-grow">
          <Image src="https://neggo.my.canva.site/images/9f9e562e2ea842f7132cd0ef59605967.svg" fill={true} alt="Marketing img"/>
        </figure>
      </section>

      <section className="w-full h-full sm:w-[90%]">
        <div className="flex flex-col gap-5 justify-center items-center bg-white h-full py-5">
          <h2 className="text-rose text-lg font-bold text-center">¡Seras el primero o la primera en saber!</h2>
          <form onSubmit={handleSubmit} className="flex-grow flex flex-col justify-between items-center gap-2 py-3">
            <Input label="NOMBRE DE LA EMPRESA" name="empresa" value={formData.empresa} onChange={handleInputChange} />
            <Input label="NIT DE LA EMPRESA" name="nit" value={formData.nit} onChange={handleInputChange} />
            <Input label="NOMBRE DEL CONTACTO" name="contacto" value={formData.contacto} onChange={handleInputChange} />
            <Input label="CELULAR DEL CONTACTO" name="celular" value={formData.celular} onChange={handleInputChange} type="tel" />
            <Input label="CORREO DE LA EMPRESA" name="correo" value={formData.correo} onChange={handleInputChange} type="email" />
            <button type="submit" className="bg-rose w-[50%] text-white rounded-2xl hover:bg-rose/75 hover:scale-105 transition">ENVIAR</button>
          </form>
          <span className="text-rose text-sm font-semibold">¡Pronto nos comunicaremos contigo!</span>
        </div>
      </section>
    </div>
  )
}

const Input = ({ label, type, name, value, onChange }: { label: string, type?: HTMLInputTypeAttribute, name?: string, value?: string, onChange?: (e: ChangeEvent<HTMLInputElement>) => void }) => {
  return (
    <label className="text-sm text-gray-500 w-[80%]">
      <span className="pl-3">{label}</span>
      <input type={type} name={name} value={value} onChange={onChange} className="w-full rounded-3xl py-1 bg-gray-300" />
    </label>
  )
}

