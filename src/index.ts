let dimensionArregloN: number = Number(
  prompt("Ingrese un numero para indicar el tamaño del arreglo")
);
let arregloDeNumeros: number[] = new Array(dimensionArregloN);
let indice: number;
let contadorDePositivos: number = 0;
let contadorDeNegativos: number = 0;
let contadorDeCeros: number = 0;

for (indice = 0; indice < dimensionArregloN; indice++) {
  arregloDeNumeros[indice] = Number(
    prompt(`Indique el numero que va en la posicion ${indice}:`)
  );
}

for (indice = 0; indice < dimensionArregloN; indice++) {
  if (arregloDeNumeros[indice] === 0) {
    contadorDeCeros = contadorDeCeros + 1;
  } else {
    if (arregloDeNumeros[indice] < 0) {
      contadorDeNegativos = contadorDeNegativos + 1;
    } else {
      contadorDePositivos = contadorDePositivos + 1;
    }
  }
}
console.log("La cantidad de CEROS es de:", contadorDeCeros);
console.log("la cantidad de numerosPositivos es de:", contadorDePositivos);
console.log("La cantidad de Negativos es de:", contadorDeNegativos);
