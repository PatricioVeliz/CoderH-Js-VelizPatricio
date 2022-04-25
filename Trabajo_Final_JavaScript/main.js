let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', () => {

    if(pagina < 1000){

        pagina += 1;
        cargapeliculas();
    }
});

btnAnterior.addEventListener('click', () => {

    if(pagina > 1){

        pagina -= 1;
        cargapeliculas();
    }
});

const cargapeliculas = async() =>{

    try{
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=aab46e908d9dad1298492a7dc1039abd&language=es-MX&page=${pagina}`);
    
        console.log(respuesta);

        
        if(respuesta.status === 200){
            
            const datos = await respuesta.json();
            
            let peliculas = '';
            datos.results.forEach(pelicula => {
				peliculas += `
					<div class="pelicula">
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
						<h3 class="titulo">${pelicula.title}</h3>
					</div>
				`;
			});

			document.getElementById('contenedor').innerHTML = peliculas;

        } 

    } 
    /*  */
    catch(error){
        console.log(error);
    }


}

cargapeliculas();