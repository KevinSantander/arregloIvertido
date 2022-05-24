let arregloInvertido: number = Number(
  prompt(`Ingrese la dimensión del arreglo: `)
);
let arreglo: number[] = new Array(arregloInvertido);
let indice: number;
let resultado: number = 0;
for (indice = 0; indice < arregloInvertido; indice++) {
  arreglo[indice] = Number(
    prompt(`Indique el nro que va en la posición ${indice}: `)
  );
  resultado = arreglo[indice];
  console.log(`Numero ingresados son ${resultado}`);
}
console.log("De dimension:", arregloInvertido);

//for (indice = 0; indice < dimensionArreglo; indice++) {
//console.log(`El número en la posición ${indice} es: ${arreglo[indice]}`);
//}
//console.log(`La suma del arreglo es: ${resultado}`);
