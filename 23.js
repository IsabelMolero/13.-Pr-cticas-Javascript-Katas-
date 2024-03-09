// Ejercicio 23
// Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola.

const movies = [
  { name: "Titan A.E.", durationInMinutes: 96 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
];

let smallMovies = [];
let mediumMovies = [];
let largeMovies = [];

for (let i = 0; i < movies.length; i++){
   if (movies[i].durationInMinutes < 100){
     smallMovies.push(movies[i]);
   }
  if (movies[i].durationInMinutes > 100 && movies[i].durationInMinutes < 200){
    mediumMovies.push(movies[i]);
  }

  if (movies[i].durationInMinutes > 200){
    largeMovies.push(movies[i]);
  }
}
console.log(smallMovies);
console.log(mediumMovies);
console.log(largeMovies);