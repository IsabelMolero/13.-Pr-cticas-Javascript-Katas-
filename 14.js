// Ejercicio 14
// Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Puedes usar este array para probar tu función:

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];

function repeatCounter(counterWords) {
  let finalResult = {};
  for (let i = 0; i < counterWords.length; i++){
    const word = counterWords[i];
    if(finalResult[word]){
      finalResult[word]++;
    }else{
      finalResult[word] = 1;
    }
  }
  return finalResult;
}

console.log(repeatCounter(counterWords));
