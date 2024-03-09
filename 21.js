// Ejercicio 21
// Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto
// "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:".

const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

//OPCION 1
// for (const user of users) {
//   if (user.years < 18){
//      console.log("Usuarios menores de edad:" + user.name);
//   }
//   if (user.years >= 18){
//     console.log("Usuarios mayores de edad:" + user.name);
//  }
// }

//OPCION 2
let menoresDeEdad = [];
let mayoresDeEdad = [];

for (const user of users) {
  if (user.years < 18) {
    menoresDeEdad.push(user.name); 
  } else {
    mayoresDeEdad.push(user.name); 
  }
}
console.log("Usuarios menores de edad:", menoresDeEdad.join(", "));
console.log("Usuarios mayores de edad:", mayoresDeEdad.join(", "));


