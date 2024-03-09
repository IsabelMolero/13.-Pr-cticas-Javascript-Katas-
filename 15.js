// Ejercicio 15
// Usa includes: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript.

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
// console.log(products.includes('Camiseta de Pokemon'));


for (let i = 0; i < products.length; i++){
  product = products[i];
  // console.log(product);
  let contieneCamiseta = product.includes('Camiseta');
  // console.log(contieneCamiseta);
  if (contieneCamiseta == true) {
    console.log(product);
  }
}

