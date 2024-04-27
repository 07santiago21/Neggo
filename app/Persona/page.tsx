import Image from "next/image"
import { HTMLInputTypeAttribute } from "react"

export default function Persona() {

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
          <form action="" className="flex-grow flex flex-col justify-between items-center gap-2   py-3">

            <Input label="NOMBRE Y APELLIDOS" />
            <Input label="CÉDULA" />
            <Input label="CELULAR DE CONTACTO" />
            <Input label="CORREO PERSONAL" type="tel" />
            <div className="flex w-[80%] justify-between">
              <span className="pl-3">¿TIENES ALGÚN NEGOCIO?</span>

              <label><input type="radio" name="businessOwner" id="BO-true" value="true" className="mx-2"/>Si</label>
              <label><input type="radio" name="businessOwner" id="BO-false" value="false" className="mx-2" />No</label>
            </div>
            <Input label="NOMBRE DEL NEGOCIO"  />
            <Input label="RED SOCIAL O PAGINA WEB DEL NEGOCIO"  />
            <button className="bg-rose w-[50%] text-white rounded-2xl hover:bg-rose/75 hover:scale-105 transition">ENVIAR</button>
          </form>
          <span className="text-rose text-sm font-semibold">¡Pronto nos comunicaremos contigo!</span>
        </div>
      </section>
    </div>
  )
}

const Input = ({ label, type }: { label: string, type?: HTMLInputTypeAttribute }) => {
  return (
    <label className="text-sm text-gray-500 w-[80%]">
      <span className="pl-3">{label}</span>
      <input type={type} className="w-full rounded-3xl py-1 bg-gray-300" />
    </label>
  )
}