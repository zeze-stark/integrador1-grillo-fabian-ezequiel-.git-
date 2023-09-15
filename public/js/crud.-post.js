export const crearPublicacion = async () =>
fetch ()

export const obtenerPublicaciones = async () =>
const response = await fetch ()

export const obtenerPublicacion = async () =>


export const eliminarPublicacion = async () =>

export const mostrarPublicaciones = (publicaciones, elemento) =>(
let registros = '';
publicaciones.forEach(pub => {
    registros +=
    <section>
        <Imag src="$(pub.url_imagen)" height="200" width="200"></Imag>
        <div>
         <h4>$(pub.titulo)
         </h4>
         <p>$(pub.detalle)</p> 
         <p>$(pub.fecha_publicacion)</p>

        </div>
    </section> 
    
});

)

elemento.innerHTML =registros

