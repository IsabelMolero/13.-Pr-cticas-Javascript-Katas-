// Ejercicio 18
// Probando For: Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en un console log el array. Puedes usar este array:
let placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

//OPCION 1 --> Bucle FOR
// let placesToTravelResult = [];
// for (let i = 0; i < placesToTravel.length; i++){
//   if((placesToTravel[i].id != 11) && (placesToTravel[i].id != 40)){
//     placesToTravelResult.push(placesToTravel[i]);
//   } 
// }
// console.log(placesToTravelResult);

//OPCION 2 --> metodo Filter
console.log(placesToTravel.filter(element => ((element.id != 11)&&(element.id != 40))));
