import Image from "next/image"

import LogoNeggo from "@public/images/LogoNeggo.png"
import IconoNeggo from "@public/images/IconoNeggo.png"

export default function TyC() {

  return (
    <div className="grid grid-rows-[auto_1fr] h-full w-full place-items-center">
      <header className="flex justify-between px-4 py-3 text-xs w-full sm:px-6 md:px-8 lg:px-10">
        <figure className="relative w-20 sm:w-24 md:w-32">
          <Image src={LogoNeggo} alt="Neggo Logo" layout="responsive"/>
        </figure>

        <nav className=" *:px-3 *:font-semibold flex gap-2 text-xs">
          <a href="/" className=" flex items-center bg-rose text-white rounded-2xl">INICIO</a>
          <a href="/TyC" className="flex items-center text-rose border-b-2 border-rose">T y C</a>
        </nav>
      </header>

      <article className="relative w-full h-full items-center px-5 md:px-12">

        <main className="flex flex-col text-left items-center gap-7 md:gap-10">
        <h2 className="font-bold text-lg sm:text-xl lg:text-4xl">Terminos y condiciones</h2>
        
            <h1>TÉRMINOS Y CONDICIONES GENERALES DEL SERVICIO</h1>
            
        
            <p>La plataforma <a href="https://www.neggo.co">www.neggo.co</a> es una plataforma virtual propiedad de <strong>NEGGO</strong>, establecimiento de comercio a las leyes colombianas, identificada con número de matrícula 21-696288-02 con domicilio en la ciudad de Medellín, la cual presta los servicios a través de su plataforma.</p>
            
            <p>Este documento contiene información legal que le recomendamos leer completamente. Por medio de la aprobación de los presentes Términos y Condiciones se entiende que el usuario los ha leído y aceptado, en todas sus partes, y entiende que estos le son legalmente vinculantes y obligatorios. Por tanto, acepta las condiciones de utilización y aprovechamiento de la Plataforma, Contenido y prestación de Servicios en los términos aquí descritos. En caso contrario, el usuario deberá abstenerse de acceder a la Plataforma y utilizar cualquier información o prestar cualquier servicio provisto por la misma.</p>
            
            <p>Mediante el acceso y uso de los Servicios, el usuario acuerda vincularse jurídicamente por estos Términos y Condiciones, que establecen una relación contractual entre el usuario, que se registre en la Plataforma para prestar determinados servicios, y <strong>NEGGO.</strong> Si usted no acepta dichos Términos y Condiciones, no podrá acceder, usar o prestar ningún servicio a través de la Plataforma. Estos Términos y Condiciones sustituyen expresamente los acuerdos o compromisos previos con el usuario. <strong>NEGGO</strong> podrá poner fin de inmediato a estos Términos y Condiciones o cualquiera de los Servicios respecto de usted o, en general, dejar de ofrecer o denegar el acceso a los Servicios o cualquier parte de ellos, en cualquier momento y por cualquier motivo. Al aceptar los presentes Términos y Condiciones el usuario tendrá acceso a la Plataforma y podrán registrarse cómo “Cliente” de la Plataforma. </p>

            <p><strong>NEGGO</strong> podrá modificar los Términos y Condiciones relativos a los Servicios cuando lo considere oportuno. Las modificaciones se harán efectivas después de la publicación por parte de NEGGO de los Términos y Condiciones actualizados en esta ubicación o las políticas modificadas o condiciones suplementarias sobre el Servicio aplicable. Su acceso o uso continuado de los Servicios después de dicha publicación constituye su consentimiento a vincularse por los Términos y Condiciones y sus modificaciones. </p>    

            <h3>1. DEFINICIONES </h3>
            <p>Los términos cuya primera letra figura en mayúscula (salvo cuando se deba exclusivamente a que inician una oración o se trate de un nombre propio), tienen el significado que se les asigna a continuación, o el que se les asigne expresamente en estos Términos y Condiciones o en la Política de Privacidad: </p>

            
            <ul className="list-disc px-7" >

            <li><strong>NEGGO:</strong>  Hace referencia al establecimiento de comercio <strong>NEGGO</strong> con domicilio en la ciudad de Medellín, Colombia identificada con el número de matrícula 21-696288-02. </li>
            <li><strong>Aplicativo, App, Aplicación o Plataforma: </strong> Se refiere al software elaborado para funcionar como programa disponible para dispositivos tecnológicos, y tiene como finalidad permitir a
            un Cliente realizar uno o diversos tipos de tareas, todas ellas inmersas dentro del objeto de los términos y condiciones o actividades conexas o relacionadas. </li>
            <li><strong>Calificación crediticia:</strong> Análisis e investigación realizada por los Proveedores o por NEGGO directamente para identificar la viabilidad económica de la celebración del presente vínculo jurídico. </li>
            <li><strong>Cliente:</strong> Hace referencia a toda persona natural o jurídica, que preste o esté interesada en prestar servicios personalizados de ejercicio físico o cualquier otro que sea ofertado en la Plataforma por parte de <strong>NEGGO.</strong> </li>
            <li><strong>Credenciales:</strong>Cliente y contraseña utilizados para acceder a la Plataforma </li>
            <li><strong>Cuenta:</strong> Hace referencia a la asignación proporcionada a toda persona física, o representante en cualquier forma de estos, para hacer uso de la Plataforma o que se encuentra registrado en la Plataforma.</li>
            <li><strong>Datos Personales:</strong>Es toda la información que permite identificar o hacer identificable a una persona física y/o moral.</li>
            <li><strong>Demanda:</strong>Necesidades de los usuarios registrados en la Plataforma.</li>
            <li><strong>Inscripción:</strong>Proceso realizado por parte de un Usuario y/o Cliente por medio de la Plataforma.</li>
            <li><strong>Las Partes:</strong>Corresponden a NEGGO, Cliente y el usuario conjuntamente.</li>
            <li><strong>Pasarela de Pagos:</strong>Servicio que permite la realización de pagos por parte de los usuarios directamente a <strong>NEGGO</strong> a través de medios electrónicos utilizando plataformas tecnológicas (software). </li>
            <li><strong>Pago del usuario:</strong>El usuario podrá pagar el costo del servicio a través de la Pasarela de pagos aliada de <strong>NEGGO</strong>, la cual podrá tener varios canales para recaudar cada uno de los pagos efectuados por el usuario. La Pasarela de Pagos utilizada por a <strong>NEGGO</strong> no es de su propiedad exclusiva, por lo que los dineros que sean recaudados por medio de la Plataforma serán recaudados por medio de un intermediario bancario de conformidad con las disposiciones normativas de la Superintendencia Financiera. Del mismo modo, el usuario podrá efectuar el pago contra entrega, es decir, una vez se entregan los productos en su lugar de destino, el usuario podrá efectuar el pago del producto.</li>
            <li><strong>Plataforma:</strong>Hace referencia al Sitio Web, aplicaciones móviles y plataformas operadas por NEGGO, a través de las cuales los usuarios podrán acceder a los Servicios </li>
            <li><strong>Proveedores:</strong>Toda persona natural o jurídica que provea de algún servicio o bien directamente a NEGGO para el desarrollo de las actividades desarrolladas por la plataforma.</li>
            <li><strong>Servicios:</strong>Significa todos los servicios ofrecidos y explicados en el presente documento.</li>
            <li><strong>Tercero</strong> Persona natural o jurídica, que desea tener relación comercial con el Cliente.</li>
            <li><strong>Términos y Condiciones:</strong>Términos de Uso o Acuerdo significa los presentes Términos y Condiciones de <strong>NEGGO.</strong> </li>
            <li><strong>Usuario:</strong>Persona natural o jurídica que se encuentra interesada de tomar los servicios, productos o relación comercial de proveeduría con Neggo.</li>
            
            </ul>

            <h3>2. ACEPTACIÓN DE LOS TÉRMINOS Y CONDICIONES </h3>
            <p>Mediante la aceptación de los Términos y Condiciones establecidos en esta plataforma <strong>EL USUARIO</strong> acepta las condiciones aquí contenidas de <strong>NEGGO.</strong> Así mismo, se entiende que aceptan
            las demás reglas de operación, políticas y procedimientos que puedan ser publicados por <strong>NEGGO</strong>, en la plataforma, cada uno de los cuales se incorporan por referencia. Los presentes términos y condiciones describen la relación jurídica única que vincula jurídicamente a el usuario que acepte los términos y condiciones con NEGGO. 
            <strong>NEGGO</strong> podrá corroborar información personal, privada, semiprivada y sensible de <strong>LOS USUARIOS</strong>, mismos que aceptar de forma previa y expresa por medio del presente documento el tratamiento de sus datos que para efectos de llevar acabo cada uno de los fines y objetivos de la prestación de los servicios solicitados por medio de la plataforma. 
            </p>
            <h3>3. CAPACIDAD</h3>
            <p>De conformidad con la Ley Colombiana, <strong>LOS USUARIOS</strong>que acepten estos Términos y Condiciones deben ser legalmente aptos y contar con las autorizaciones pertinentes para la vinculación de la persona a la que representa o tener capacidad legal para suscribir actos y obligarse en virtud del presente acuerdo. No podrá aceptar los presentes Términos y Condiciones aquellas personas
            cuya capacidad se encuentre sometida a la aceptación de su curador o representante. En esos términos, <strong>EL USUARIO</strong> que se registre en la Plataforma se vinculó en virtud del presente acuerdo. 
            En caso de tratarse personas jurídicas, aquellas que decidan ingresar cómo Clientes deberán certificar que son los representantes legales o administradores del establecimiento de comercio o de las sociedades a las que representen. En esos términos, la persona que acepte los Términos y Condiciones 
            manifiesta bajo la gravedad de juramento que cuenta con la suficiente capacidad legal para vincularse y en caso tal que la persona que acepte los Términos y Condiciones no cuente con dicha capacidad legal será el único e ilimitado responsable de los perjuicios que pueda llegar a ocasionar con la falsedad de su identidad
            o con la carencia de su representación o capacidad legal para obligarse en virtud del presente acuerdo. 
            El incumplimiento de esta disposición dará lugar para que <strong>NEGGO</strong> solicite los perjuicios que se pudieran llegar a ocasionar. De conformidad con lo anterior, <strong>LOS USUARIOS</strong> garantizan y <strong>NEGGO</strong> entiende que este acepta los presentes Términos y Condiciones y conoce previamente si está o no en capacidad de celebrar contratos a nombre de la persona que se determine como Cliente. 
            </p>
            <h3>4. ALCANCE DE SERVICIO</h3>
            <p><strong>NEGGO</strong> es una plataforma digital de soluciones y ayuda financiera para personas, por medio de la cual brinda servicios de diagnóstico financiero-legales y otros servicios financieros. Para el desarrollo y ejecución de la plataforma, NEGGO utilizará los datos financieros de los usuarios para crear soluciones según las necesidades de los usuarios. Los USUARIOS podrán utilizar la plataforma exclusivamente para su uso personal sin que esto implique el otorgamiento de una licencia de la tecnología de la plataforma de ningún tipo. 
            NEGGO podrá solicitar de forma previa o en desarrollo y ejecución del presente acuerdo de voluntades, información personal y sensible para evaluar el comportamiento de los <strong>USUARIOS y CLIENTES</strong>. NEGGO, conservará y administrará los datos y la información financiera con el fin de desarrollar un análisis financiero. A partir del análisis de la información financiera, capacidad de endeudamiento y demás políticas internas de NEGGO, se otorgarán los respectivos servicios financieros que se requieran para cada caso. 
            </p>
            <ul className="px-5 py-3 space-y-5" >
              <li>
                <h3>4.1 ALCANCE DEL SERVICIO EN RELACIÓN CON NEGGO</h3>

                <p>NEGGO se compromete a prestar una Plataforma que cuente con los mejores estándares de seguridad, así como una plataforma estable en términos de conexión, interconexión y utilidad para
                los Usuarios. Del mismo modo, NEGGO evaluará y celebrará con el Usuario, un contrato de mutuo acuerdo para la prestación de los servicios ofrecidos. 
                </p>
              </li>

              <li>
                <h3>4.2 ALCANCE DEL SERVICIO EN RELACIÓN CON LOS USUARIOS</h3>

                <p>Los Usuarios podrán acceder a la Plataforma en cualquier momento y solicitar los servicios ofrecidos por NEGGO en los términos que se evidencian en el presente instrumento jurídico. En esos términos, para la solicitud de los servicios financieros, el Usuario debió aceptar el presente instrumento jurídico, así como la Política de Protección y Tratamiento de Datos, misma que autoriza a NEGGO a utilizar información personal o sensible para evidenciar la viabilidad económica y jurídica del contrato. La relación jurídica del Usuario respecto de NEGGO empezará desde el momento exacto en el que USUARIO acepte los Términos y Condiciones por medio de la plataforma, momento mismo en el que adquiere la obligación de realizar cualquier actividad bajo el principio de buena fe mercantil, desde el momento precontractual hasta el postcontractual. </p>
              </li>


            </ul>


            <h3>5. DISPOSICIONES GENERALES A TODOS LOS SERVICIOS OFRECIDOS POR NEGGO </h3>

            <ul className="px-5 py-3 space-y-5" >
              <li>
                <h3>5.1 SERVICIOS PRESTADOS</h3>
                <p>Por medio de la Plataforma, NEGGO otorgará servicios financieros a los Usuarios, los mismos que serán efectuados mediante la celebración de un contrato de mutuo acuerdo, por medio del cual, NEGGO efectuará los servicios financieros.</p>
              </li>

              <li>
                <h3>5.2 INSCRIPCIÓN Y REGISTRO</h3>
                <p>En relación con el registro de los Usuario estará sujeta a los presentes Términos y Condiciones. <strong>NEGGO</strong> se reserva el derecho de afiliación, uso y exclusión de Usuarios en su Plataforma. Este registro se realizará a través de la página web <a href="https://www.neggo.co">(www.neggo.co).</a> Para el desarrollo de la inscripción y registro de la Plataforma se podrá solicitar, entre otras, la siguiente información personal la cual va a ser tratada de conformidad con la Política de Protección de Datos Personales: </p>
                <ul className="px-5 py-3 space-y-5" >
                  <li>1. Nombre y Apellido. </li>
                  <li>2. Número de teléfono.</li>
                  <li>3. Dirección de correo.</li>
                  <li>4. Fotografía del documento de identidad de la persona titular de la cuenta.</li>
                  <li>5. Cualquier otro documento o información que sea necesaria. </li>
                </ul>

              
              </li>

              <li>
                <h3>5.3 VIOLACIÓN DEL SISTEMA O BASES DE DATOS</h3>
                <p>Con la utilización de la Plataforma, los Usuarios aceptan que se encuentra prohibido y no está permitida ninguna acción o uso de dispositivo, software o cualquier otro medio tendiente a interferir tanto en las actividades y operativa de NEGGO como en las ofertas, descripciones, cuentas o bases de datos de NEGGO. Cualquier intromisión, tentativa o actividad violatoria o contraria a las leyes sobre derecho de propiedad intelectual y/o a las prohibiciones estipuladas en el contrato, harán posible a
                su responsable de las acciones legales pertinentes, y a las sanciones previstas por este acuerdo, así como responsable de indemnizar los daños ocasionados.
                </p>

              </li>

              <li>
                <h3>5.4 SANCIONES POR INCUMPLIMIENTO DE LOS TÉRMINOS Y CONDICIONES</h3>
                <p>NEGGO podrá efectuar sanciones a los Usuarios de la Plataforma por el incumplimiento de las obligaciones consagradas en los Términos y Condiciones o por el incumplimiento de las obligaciones de ley en cualquier momento en desarrollo de las relaciones contractuales entre las Partes. Las sanciones que podrán ser efectuadas por parte de NEGGO son: (i) suspensión temporal de la Cuenta; (ii) suspensión definitiva de la cuenta, (iii) sanciones que impacten negativamente la reputación de la Marca o Local y (iv) bloqueo temporal o definitivo de Usuario y de la Cuenta. NEGGO se reserva el derecho de establecer cuál debe ser la sanción respectiva por el incumplimiento de las obligaciones de los términos y condiciones. Para establecer la sanción respectiva por el incumplimiento de las obligaciones, NEGGO calificará el hecho en leve, grave o gravísimo dependiendo de los efectos que haya generado el hecho u acto del Usuario. Las Sanciones realizadas por NEGGO se realizarán siguiendo los siguientes parámetros, a saber: </p>
                <ul className="px-5 py-3 space-y-5" >
                  <li>1. Se realicen actos que vulneren disposiciones normativas del ordenamiento jurídico colombiano, o de cualquiera de las estipulaciones que se encuentran consagradas en los Términos y Condiciones.</li>
                  <li>2. Se realicen actos que se encuentren en contravía de la buena fe comercial y de las sanas costumbres mercantiles. </li>
                  <li>3. Se realicen actos que generen perjuicios para otros Usuarios por medio de conductas dolosas o fraudulentas. </li>
                  <li>4. Si luego de realizar el registro o inscripción, NEGGO no pueda corroborar la identidad del Usuario o cualquier información suministrada por éste sea errónea o falsa. </li>
                  <li>5. Cuando el Usuario publique contenido falso, no veraz o acorde con la realidad por medio del comercio social. </li>
                  <li>6. NEGGO entendiera que las publicaciones u otras acciones puedan ser causa de responsabilidad para el Usuario que las publicó, para NEGGO o para los Usuarios en general. </li>
                  <li>7. Cualquier otro acto que vaya en detrimento de derechos o intereses de Usuarios o terceras personas. </li>
                </ul>
                
                <p>En caso de que un Usuario sea objeto de sanciones por los comportamientos señalados con anterioridad por parte de NEGGO, todas las solicitudes que haya realizado, así como cualquier contenido generado por el Usuario podrán ser eliminados de forma discrecional por parte de NEGGO y el Usuario no podrá realizar reclamaciones o solicitar indemnizaciones al aceptar que su conducta no se encuentra admitida en la Plataforma.</p>
              </li>

              <li>
                <h3>5.5 FALLAS EN EL SISTEMA</h3>
                <p>NEGGO no se hace responsable por cualquier daño, perjuicio o pérdida a los Usuarios de la plataforma que sean causados por fallas en el sistema, en los servidores o en el Internet. NEGGO tampoco se considerará como responsable por cualquier virus que pudiera infectar el equipo de los Usuarios como consecuencia del acceso, uso o examen o a raíz de cualquier transferencia de datos, archivos, imágenes, textos o audio contenidos en la Plataforma. De esa forma, los Usuarios no
                podrán imputar responsabilidad a NEGGO o solicitar el reconocimiento de perjuicios resultantes de dificultades técnicas o fallas en los sistemas o en internet. </p>

              </li>

              <li>
                <h3>5.6 REQUISITOS PARA REALIZAR EL REGISTRO EN LA PLATAFORMA</h3>
                <p>Los Usuarios de la Plataforma deberán contar, cuanto menos, con los siguientes requisitos, a saber:</p>
                <ul className="px-5 py-3 space-y-5" >
                  <li>1. Ser mayor de 18 años.</li>
                  <li>2. Tener domicilio y residir en la República de Colombia. </li>
                  <li>3. Tener capacidad legal para contratar. </li>
                  <li>4. Contar con un documento nacional de identidad válido y emitido por la República de Colombia y en condiciones de ser leído electrónicamente. </li>
                  
                </ul>

              </li>

              <li>
                <h3>5.7 EXONERACIÓN DE RESPONSABILIDAD POR ATAQUES INFORMÁTICOS </h3>
                <p>NEGGO no se hará responsable por ataques informáticos exógenos de la debida diligencia en desarrollo de sus deberes de protección a ataques informáticos. </p>

              </li>

              <li>
                <h3>5.8 MEJORAMIENTO CONTINUO O MANTENIMIENTO DE LA PLATAFORMA </h3>
                <p>NEGGO manifiesta que en el desarrollo de sus actividades de mejoramiento o mantenimiento de la Plataforma podrá interrumpir el acceso a los Usuarios. En esos términos, la Plataforma podrá no estar disponible, en tal caso se procurará restablecerla con la mayor celeridad posible sin que por ello pueda imputarse algún tipo de responsabilidad. </p>

              </li>

            </ul>



        </main>

        <div className="flex justify-center items-center mt-8">
        <figure className="relative h-20 w-20 sm:h-25 sm:w-25 md:h-42 md:w-42">
          <Image
            src={IconoNeggo}
            alt="Icono neggo"
            layout="responsive"
          />
        </figure>
        </div>

      </article>
    </div>
  )
}
