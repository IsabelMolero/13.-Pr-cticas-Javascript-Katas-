// Ejercicio 12
// Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:
// pista (cuando eliminamos algo de un array, su longitud se verá afectada)

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

function removeDuplicates(duplicates) {
  let arrayResult = [];
  for (let i = 0; i < duplicates.length; i++){
    let duplicateElements = false;
    for (let j = 0;  j < arrayResult.length; j++){
      if (duplicates[i] === arrayResult[j]){
        duplicateElements = true;
      }
    }
   if (duplicateElements === false){
    arrayResult.push(duplicates[i]);
   }
  }
  return arrayResult;
}
console.log(removeDuplicates(duplicates));










