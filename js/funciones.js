/*Crear una funcion que agrege una pelicula al array de peliculas
La pelicula debera tener un ID y un Titulo
Crear una funcion que evalue antes de agregar que la pelicula no fue ingresada previamente
Crear una funcion que ordene las peliculas por Titulo y por ID
Crear una funcion que elimine una pelicula por su ID.*/

var peliculas=[];
var id=1;

var Pelicula= function(id,titulo){
	this.id=id;
	this.titulo=titulo;
}

function validarPelicula(titulo){
	var res=true;
	if(peliculas.length>0){
		for(var i=0;i<peliculas.length;i++){
			var peli=peliculas[i];
			if(peli.titulo==titulo){
				res=false;
				break;
			}
		}
	}
	return res;
}

function agregarPelicula(titulo){
	if(validarPelicula(titulo)){
		peliculas.push(new Pelicula(id,titulo))
		id++;
	}
}

function eliminarPelicula(id){
	var peli;
	for(var i=0;i<peliculas.length;i++){
		peli=peliculas[i];
		if(peli.id==id){
			peliculas.splice(i,1);
			break;
		}
	}
}

function ordenarPeliculas(){
	peliculas.sort(function(a,b){
		return a.titulo>b.titulo;
	});
}

/*function ordenarPeliculasV2(){
	var aux=[];
	var posPelAux;
	while(peliculas.length>1){
		var peliculaAux="";
		for(var i=0;i<peliculas.length;i++){
			peli=peliculas[i];
			if(peli.titulo<peliculaAux || peliculaAux==""){
				posPelAux=i;
				peliculaAux=peliculas[i].titulo;
			}
		}
		aux.push(peliculas[posPelAux]);
		peliculas.splice(posPelAux,1);
	}
	if(peliculas.length==1){
		aux.push(peliculas[0]);
		peliculas=aux;
	}
}*/

agregarPelicula("Lord Of The Rings");
agregarPelicula("Matrix");
agregarPelicula("La vida es Bella");
agregarPelicula("Rocky IV");
agregarPelicula("Star Wars");
agregarPelicula("Volver al Futuro");
agregarPelicula("Snatch");
agregarPelicula("StarTrek");
agregarPelicula("El Secreto de sus Ojos");
agregarPelicula("Nueve Reinas");
console.log(peliculas);
ordenarPeliculas();
console.log(peliculas);
eliminarPelicula(5);
console.log(peliculas);