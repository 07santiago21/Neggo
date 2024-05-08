"use client"
import { Document } from "mongoose"
import Image from "next/image"
import { useRouter } from "next/router"
import { FormEvent } from "react"
import { HTMLInputTypeAttribute } from "react"
import { alert } from "../../components/ui/alert"
import { useState } from 'react';



export default function Persona() {

  //visibilidad datos de negocio
  const [showCompanyFields, setShowCompanyFields] = useState(false);

  const handleBusinessOwnerChange = (e) => {
    setShowCompanyFields(e.target.value === "true");
  };



  //estado checkbox terminos y condiciones 

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);};

  //preventDefault() = cancelar comportamiento por defecto (refrescar pagina)

  const handleSubmit = async (e:FormEvent <HTMLFormElement>) => {
    e.preventDefault()
    
    //es como extraer los datos del formulario actual
    const formData = new FormData(e.currentTarget)
    
    
    
    const name = formData.get("name")
    const document= formData.get("document")
    const tel = formData.get("tel")
    const email = formData.get("email")
    const name_company = formData.get("name_company") ?? 'null'
    const data_company = formData.get("data_company") ?? 'null'
    const businessOwner = formData.get("businessOwner")
    const bussines_exist = businessOwner === "true";
    console.log(name_company,data_company)
    console.log(name,document,tel,email,name_company,data_company,bussines_exist)

    const data = {
      full_name : name,
      id : document,
      phone : tel,
      email : email,
      bussines_exist : bussines_exist,
      bussines_name: name_company,
      bussines_website: data_company
  };

  try {
    // Realizar la solicitud POST al backend
    const response = await fetch('/api/Personas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    
    // Verificar si la solicitud fue exitosa
    if (response.ok) {
        console.log("Datos enviados correctamente");
        alert("Registro exitoso","sus datos se almacenaron correctamente","success")
        
        
    } else {
        console.error("Error al enviar los datos:", response.statusText);
        alert("Registro fallido","sus datos no se almacenaron correctamente, por favor verifique sus datos y reenvie el formulario","error")

    }
} catch (error) {
    console.error("Error en la solicitud:", error);
    alert("Error interno ","error al procesar la solicitud","error")

}



  }

  return (
    <div className="grid grid-rows-[auto_1fr] md:grid-rows-1 md:grid-cols-2 place-items-center w-full h-full bg-lime" >
      <section className="py-5 h-full w-full flex flex-col justify-around items-center">
        <h2 className="text-rose text-2xl text-center font-bold max-w-md mb-5 sm:text-3xl md:text-4xl xl:text-5xl z-10">Soy Persona</h2>
        <figure className="relative w-full min-h-40 flex-grow">
          <Image src="https://neggo.my.canva.site/images/9f9e562e2ea842f7132cd0ef59605967.svg" fill={true} alt="Marketing img" />
        </figure>
      </section>

      <section className="w-full h-full sm:w-[90%]">
        <div className="flex flex-col gap-5 justify-center items-center bg-white h-full py-5">
          <h2 className="text-rose text-lg font-bold text-center">¡Seras el primero o la primera en saber!</h2>
          <form onSubmit={handleSubmit} className="flex-grow flex flex-col justify-between items-center gap-2   py-3">

            <Input label="NOMBRE Y APELLIDOS" name="name"/>
            <Input label="CÉDULA" name="document"/>
            <Input label="CELULAR DE CONTACTO" name="tel"/>
            <Input label="CORREO PERSONAL" type="email" name="email"/>
            <div className="flex w-[80%] justify-between">
              <span className="pl-3">¿TIENES ALGÚN NEGOCIO?</span>

              <label><input type="radio" onChange={handleBusinessOwnerChange} name="businessOwner" id="BO-true" value="true" className="mx-2"/>Si</label>
              <label><input type="radio" onChange={handleBusinessOwnerChange} name="businessOwner" id="BO-false" value="false" className="mx-2" />No</label>
            </div>
            {showCompanyFields && (
              <>
              <Input label="NOMBRE DEL NEGOCIO" name="name_company" />
              <Input label="RED SOCIAL O PAGINA WEB DEL NEGOCIO" name="data_company" />
            </>)}
            <label className="flex items-center">
            <input type="checkbox" onChange={handleCheckboxChange} className="mr-2" />
            <span className="text-sm">Acepto los términos y condiciones</span>
            </label>
            <button disabled={!isChecked} className={`bg-rose w-[50%] text-white rounded-2xl hover:bg-rose/75 hover:scale-105 transition ${isChecked ? '' : 'opacity-50 cursor-not-allowed'}`}>ENVIAR</button>

          </form>
          <span className="text-rose text-sm font-semibold">¡Pronto nos comunicaremos contigo!</span>
        </div>
      </section>
    </div>
  )
}

const Input = ({ label, type, name }: { label: string, name: string, type?: HTMLInputTypeAttribute }) => {
  return (
    <label className="text-sm text-gray-500 w-[80%]">
      <span className="pl-3">{label}</span>
      <input type={type} name={name} className="w-full rounded-3xl py-1 bg-gray-300" />
    </label>
  )
}
