export default function Example() {
  return (
    <>

      <main className=" bg-[#D3FB7F]">

        <div className="flex justify-center items-center h-screen"
          style={{ background: "#D3FB7F" }}
        >
          {/* Lado izquierdo: Imagen */}
          <div className="w-1/2 h-full flex justify-center items-center relative"


          >

            <h2 className="absolute top-0 mt-10 text-center text-4xl font-bold leading-9 tracking-tight" style={{ marginTop: "5%", color: '#df4869' }}>
              Soy Empresa</h2>
            <img src="https://neggo.my.canva.site/images/9f9e562e2ea842f7132cd0ef59605967.svg" alt="Image" className="max-w-full max-h-full" />
          </div>

          {/* Lado derecho: Formulario */}
          <div className="w-1/2 h-full flex justify-center items-center"

          >

            <div className="flex min-h-full flex-1 flex-col justify-center px-2 py-5 lg:px-8 ml-auto"

              style={{ background: "white", marginRight: '20%', marginBottom: '5%' }}
            >
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight" style={{ color: '#df4869', marginTop: "0%" }}>
                  ¡Seras el primero o la primera en saber!
                </h2>
              </div>

              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                  <div >
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                      NOMBRE DE LA EMPRESA

                    </label>
                    <div className="mt-2">
                      <input
                        id="company_name"
                        name="company_name"
                        type="company_name"
                        autoComplete="company_name"
                        required
                        className="block w-full rounded-full border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        style={{ background: "#ececec" }}

                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        NIT DE LA EMPRESA
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        id="nit"
                        name="nit"
                        type="nit"
                        autoComplete="nit"
                        required
                        className="block w-full rounded-full border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        style={{ background: "#ececec" }}
                      />
                    </div>

                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        NOMBRE DEL CONTACTO
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        id="name"
                        name="name"
                        type="name"
                        autoComplete="name"
                        required
                        className="block w-full rounded-full border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        style={{ background: "#ececec" }}
                      />
                    </div>

                  </div>


                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        CELULAR DEL CONTACTO
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        id="cel"
                        name="cel"
                        type="cel"
                        autoComplete="cel"
                        required
                        className="block w-full rounded-full border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        style={{ background: "#ececec" }}
                      />
                    </div>

                  </div>


                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900" >
                        CORREO DE LA EMPRESA
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-full border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        style={{ background: "#ececec" }}
                      />
                    </div>

                  </div>


                  <div className="text-center space-y-4">
                    <button
                      type="submit"
                      inline-block rounded-full px-8 py-3 text-center font-medium style={{ background: "#df4869", color: "white" }}
                      className="flex w-1/2 mx-auto justify-center rounded-full px-8 py-3 text-center font-medium"


                    >
                      Enviar
                    </button>
                    <p style={{ color: "#df4869" }}>¡pronto nos comunicaremos contigo!</p>

                  </div>
                </form>


              </div>

            </div>


          </div>
        </div>




      </main>
    </>
  )
}
