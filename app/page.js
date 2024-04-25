import Image from "next/image"

export default function Example() {
  return (
    
      
      <div>
      <nav style={{background:"white"}}>
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16 space-y-4">
              <div class="flex items-center">
                  
                  <Image src="/images/LogoNeggo.png"width={120} height={70}></Image>
              </div>
              <div class="hidden sm:block">
                  <div class="flex space-x-4">
                  <a href="#" class="inline-block rounded-full px-8 py-3 text-center font-medium " style={{color:"#df4869" }}>
                      inicio
                  </a>
                      
                      <a href="#" class="inline-block rounded-full text-white px-8 py-3 text-center font-medium " style={{background:"#df4869"}}>
                          es ahora
                      </a>
                  </div>
              </div>
          </div>
      </div>
      </nav>


<div class="relative overflow-hidden bg-white">
<div class="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
<div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8" >
  <div class="sm:max-w-lg">
  
    <h2 class="text-4xl font-bold tracking-tight text-black-900 sm:text-5xl">¡ESTAMOS CONSTRUYENDO ALGO EMOCIONANTE!</h2>
    <p class="mt-4 text-xl text-pink-500" style={{ color: '#df4869' }} >Pronto revelaremos nuestras innovadoras soluciones para potenciar tu bienestar financiero. Únete a nuestra lista de espera para ser el primero en conocerlas y dar el primer paso hacia tu futuro económico brillante.</p>
  
    <div class="justify-between space-x-4 space-y-6">
        <a href="/Empresa" class="inline-block rounded-full px-8 py-3 text-center font-medium " style={{color:"#df4869", background:"white",border:"2px  solid #df4869"}}>
          soy empresa
        </a>
        <a href="/Persona" class="inline-block rounded-full text-white px-8 py-3 text-center font-medium " style={{background:"#df4869"}}>
          Soy una presona
        </a>
      </div>
  </div>
  <div>
    <div class="mt-10">

    
        
      <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
        <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
        <img
                      src="https://neggo.my.canva.site/images/a448dd2a36d04342c54b6cb3e75e204f.svg"
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
        </div>
      </div>

      


    </div>
  </div>
</div>
</div>
</div>
      
</div>
    

  )}