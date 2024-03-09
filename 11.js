// Ejercicio 11
// Calcular promedio de strings: 
//Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:
// pista (typeof)
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(param) {
 let suma = 0;
 for (let i = 0; i < mixedElements.length; i++){
  if (typeof(mixedElements[i]) == "number"){
    suma = mixedElements[i] + suma;
    // console.log(suma);
  } else{
    suma = mixedElements[i].length + suma;
  }
 } 
 return suma;
}

console.log(averageWord(mixedElements));

//otra forma de resolverlo
// function calcularPromedioMixedElements(array) {
//   let sumaNumeros = 0;
//   let sumaLongitudesCadenas = 0;

//   for (let elemento of array) {
//       if (typeof elemento === 'number') {
//           sumaNumeros += elemento;
//       } else if (typeof elemento === 'string') {
//           sumaLongitudesCadenas += elemento.length;
//       }
//   }

//   return sumaNumeros + sumaLongitudesCadenas;
// }

// console.log("El resultado de la suma de números y longitudes de cadenas es:", calcularPromedioMixedElements(mixedElements));
