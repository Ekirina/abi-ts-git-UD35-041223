import { Serie } from "./Ejercicio1/serie";
import { Videojuego } from "./Ejercicio1/videojuego";
import { Libro } from "./Ejercicio2/libro";
import { Raices } from "./Ejercicio3/raices";

let series: Serie[] = [];

series.push(new Serie("Tokyo Vice", "J.T.Rogers"));
series.push(new Serie("Naruto", "Masashi Kishimoto"));
series.push(new Serie("Hermanos de sangre", "HBO"));
series.push(new Serie("The Big bang theory", "Mark Cendrowski"));
series.push(new Serie("Attack on Titan", "Hajime Isayama"));

let videojuegos: Videojuego[] = [];

videojuegos.push(new Videojuego("Hogwarts Legacy",35, "fantasia", "Avalanche Software"));
videojuegos.push(new Videojuego("Final Fantasy XVI", 10,"rol de acción", "Square Enix"));
videojuegos.push(new Videojuego("Mario Kart 8",80, "carreras", "Nintendo"));
videojuegos.push(new Videojuego("Alex Kidd in Miracle World", 15, "plataforma", "Sega"));
videojuegos.push(new Videojuego("Pharaon",38, "estrategia", "Sierra Entertainment"));

videojuegos[2].entregar();
videojuegos[0].entregar();
videojuegos[4].entregar();

series[1].entregar();
series[3].entregar();
series[4].entregar();

var contserie: number = 0;
var contvideojuego: number = 0;
let mayor: Serie = series[0];
let mashoras: Videojuego = videojuegos[0];

series.forEach(elemento => {
    if (elemento.isEntregado()){
      contserie++
    }
});
console.log(contserie + " son los entregados en series")


videojuegos.forEach(elemento =>{
  if (elemento.isEntregado()){
    contvideojuego++
  }
});
console.log(contvideojuego + " son los entregados en videojuegos")


series.forEach(a => {
  if (mayor.compareTO(a) == -1){
      mayor = a;
  }
});
console.log(mayor.getTitulo() + " Es la serie con más temporadas")

videojuegos.forEach(a => {
  if (mashoras.compareTO(a) == -1){
      mashoras = a;
  }
});
console.log(mashoras.getTitulo() + " Es el videojuego con más horas")

console.log("(>'')>------------------------------------------------------------<(''<)")

let libros: Libro[] = [];

libros.push(new Libro("00873201098", 500, "Sapiens", "Yuval Noah Harari"));
libros.push(new Libro("00763948293", 860, "La madre de Frankenstein", "Almudena Grandes"));

var novela: Libro = libros[1]
var novela2: Libro = libros[0]
console.log(novela.toString()); 

if(novela.getPaginas > novela2.getPaginas){
  console.log(novela.getTitulo() + " es el libro con más páginas")
}else{
  console.log(novela2.getTitulo() + " es el libro con más páginas")
}

console.log("(>'')>------------------------------------------------------------<(''<)")

let raiz: Raices[] = [];

raiz.push(new Raices(1, 2, 3))
raiz.push(new Raices(1, 4, 4))
raiz.push(new Raices(3, 10, 8))

var solucion0: Raices = raiz[0];
var solucion1: Raices = raiz[1];
var solucion2: Raices = raiz[2];

console.log(solucion0.calcular());
console.log(solucion1.obtenerRaiz());
console.log(solucion2.obtenerRaices());