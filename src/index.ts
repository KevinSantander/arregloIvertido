let arregloInvertido: number = Number(
  prompt(`Ingrese la dimensión del arreglo: `)
);
let arreglo: number[] = new Array(arregloInvertido);
let indice: number;
let resultado: number = 0;
for (indice = arreglo.length - 1; indice >= 0; indice--) {
  arreglo[indice] = Number(
    prompt(`Indique el nro que va en la posición ${indice}: `)
  );
  resultado = arreglo[indice];
  console.log(`EL numero ingresado: ${resultado}`);
}
console.log(
  `De dimension: ${arregloInvertido} y su resultado invertido es:[${arreglo}]`
);
