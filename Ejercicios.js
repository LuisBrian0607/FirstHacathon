/*Ejercicio 0
Dada una lista de números, añade una función que permita
devolver el menor de los valores de una la lista*/
let numericos=[4,5,2,10,1];

function menor(numeros){
  let menorArreglo=numeros.sort(function(a,b){
      return a-b;
  })
  return menorArreglo[0];
}

console.log(menor(numericos));

/*Ejercicio2 Añadiendo elementos a un array
con un bucle for*/
let comidas=["papa rellena","arraoz chaufa","lomo saltado"];
let postres=["arroz con leche","gelatina","flan"];
for(let i=0;i<comidas.length;i++){
  postres.push(comidas[i]);
}
console.log(postres);
let nombres=["Luis","Pedro","Carlos"];
nombres.push("Lesly"); 
console.log(nombres);
