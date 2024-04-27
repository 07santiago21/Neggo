import Image from "next/image"
import LogoNeggo from "@public/images/LogoNeggo.png"

export default function MainPage() {

  return (
    <div className="grid grid-rows-[auto_1fr] h-full w-full place-items-center">
      <header className="flex justify-between px-4 py-3 text-xs w-full sm:px-6 md:px-8 lg:px-10">
        <figure className="relative w-20 sm:w-24 md:w-32">
          <Image src={LogoNeggo} alt="Neggo Logo" layout="responsive"/>
        </figure>

        <nav className=" *:px-3 *:font-semibold flex gap-2 text-xs">
          <button className="text-rose border-b-2 border-rose">INICIO</button>
          <button className="bg-rose text-white rounded-2xl">ES HORA</button>
        </nav>
      </header>

      <article className="relative grid grid-rows-[1fr_auto] w-full h-full items-center px-3 md:grid-cols-2 md:grid-rows-1 md:px-12">

        <main className="flex flex-col text-center items-center gap-7 md:gap-10">
          <h2 className="font-bold text-lg sm:text-xl lg:text-3xl">¡ESTAMOS CONSTRUYENDO ALGO EMOCIONANTE!</h2>
          <p className="text-rose text-sm sm:text-base md:text-xl">Pronto revelaremos nuestras innovadoras soluciones para potenciar tu bienestar financiero. Únete a nuestra lista de espera para ser el primero en conocerlas y dar el primer paso hacia tu futuro económico brillante.</p>
          <div className="relative *:px-4 *:rounded-2xl *:font-semibold flex w-full max-w-sm justify-between text-xs sm:text-sm lg:text-base gap-2 ">
            <button type="button" className="border-rose border text-rose ">SOY UNA EMPRESA</button>
            <button type="button" className="bg-rose text-white">SOY UNA PERSONA</button>
          </div>
        </main>

        <figure className="relative h-44 my-6 sm:h-60 md:h-96">
          <Image
            fill={true}
            src="https://neggo.my.canva.site/images/a448dd2a36d04342c54b6cb3e75e204f.svg"
            alt="Canva"
          />
        </figure>

      </article>
    </div>
  )
}