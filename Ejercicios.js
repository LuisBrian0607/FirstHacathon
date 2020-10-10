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

/*Ejercicio 1
Factura*/
console.log("***************EJERCICIO 1****************");
function Empresa(nombre,direccion,telefono){
  this.nombre=nombre;
  this.direccion=direccion;
  this.telefono=telefono;
}
let empresa_uno=new Empresa("Norkis","av.las flores 201",952123540);

function Cliente(nombre,direccion,telefono){
  this.nombre=nombre;
  this.direccion=direccion;
  this.telefono=telefono;
}
let cliente_uno=new Cliente("Luis","av.mariscal",924102302);

function Detalle_pedido(descripcion,precio,cantidad){
   this.descripcion=descripcion;
   this.precio=precio;
   this.cantidad=cantidad;
}
let pedido1=new Detalle_pedido("Parrillada familiar",59.90,2);

function Factura(forma_pago){
    this.forma_pago=forma_pago;
    this.subtotal=function(){
      return pedido1.precio*pedido1.cantidad;
    }  
    this.IGV=function(){
      return  pedido1.precio*pedido1.cantidad*0.18;
    } 
    this.total=function(){
      return this.subtotal()+this.IGV();
    }
}
let monto=new Factura('contado');
console.log('Empresa :'+empresa_uno.nombre);
console.log('Cliente es:'+cliente_uno.nombre);
console.log('El pedido es:'+pedido1.descripcion);
console.log('el sub total de su compra es:S/.'+monto.subtotal());
console.log('el IGV de su compra es:S/.'+monto.IGV());
console.log('el monto de su compra es:S/.'+monto.total());


console.log("***************EJERCICIO 2****************");
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
console.log("***************EJERCICIO 3****************");
/*Ejercicio3 Valor futuro de 1 inversion*/ 
function ValorFuturo(valor,tasa,periodo){
  this.valor=valor;
  this.tasa=tasa;
  this.periodo=periodo;
  this.valor_futuro=function(){
    return this.valor*Math.pow(1+this.tasa/100,this.periodo);
  }
}
let resultado=new ValorFuturo(2000,0.50,10);
console.log(`el valor futuro de la inversion es ${resultado.valor_futuro()}`);

console.log("***************EJERCICIO 4****************");
/*Ejercicio4 Creando array*/
let meses=["enero","febrero","marzo","abril","mayo","junio","julio","agosto",
"septiembre","noviembre","diciembre"];
for(let resultado of meses){
  console.log(resultado);
}
console.log("***************EJERCICIO 5****************");
/*Ejercicio 5 Creando un objeto círculo*/
function círculito(radio){
   this.radio=radio;
   this.area=function(){
     return Math.PI*Math.pow(this.radio,2);
   }
   this.longitud=function(){
     return 2*Math.PI*this.radio;
   }
}
let c1=new círculito(8);
console.log(`El area del circulo es: ${c1.area()}`);
console.log(`La longitud del circulo es: ${c1.longitud()}`);

console.log("***************EJERCICIO 6****************");
/*Ejercicio 6 Identificar llamada*/ 
let contactos=[{nombre:"Luis",numero:967002123},
{nombre:"Lesly",numero:991064823},
{nombre:"Carla",numero:964123002},
{nombre:"Karen",numero:952123001}];

let marcar=contactos[1].numero;

function llamando(numerico){

  return numerico.numero==marcar;
}
let busqueda=contactos.find(llamando);
console.log(`Llamando al contacto : ${busqueda.nombre}`);

/*Ejercicio 7 Indice de masa corporal*/
console.log("***************EJERCICIO 7****************");
let indice_masa=function(peso,altura){
  return peso/Math.pow(altura,2);
}
console.log(`El indice de masa suyo es: ${indice_masa(70,1.80)}`);

console.log("***************EJERCICIO 8****************");
/*Ejercicio 8 Lista de idiomas*/ 
let Introduccion=[
  {
  idioma: "Español",
  texto: "Bienvenido al curso de React Native en PachaQtec",
  id_idioma: 1,
  },
  {
  idioma: "Ingles",
  texto: "Welcome to the React Native course at PachaQtec",
  id_idioma: 2,
  },
  {
  idioma: "Francés",
  texto: "Bienvenue dans le cours React Native chez PachaQtec",
  id_idioma: 3,
  },
  {
  idioma: "Italiano",
  texto: "Benvenuti al corso React Native presso PachaQtec",
  id_idioma: 4,
  },
  {
  idioma: "Portugués",
  texto: "Bem-vindo ao curso React Native na PachaQtec",
  id_idioma: 5,
  }]
let traduciendo=Introduccion[0].idioma;

function traductor(idioma_final){
  return idioma_final.idioma===traduciendo;
}

let buscar=Introduccion.find(traductor);
console.log(`el texto en el idoma ${traduciendo} es: ${buscar.texto}`);

console.log("***************EJERCICIO 9****************");
/*Ejercicio 9:Lista de numeros*/
let lista_numeros=[1,3,2,6,9,11];
let suma_impares=0;
let suma_pares=0;
for(let valor of lista_numeros){
  if(valor %2==0){
     suma_pares+=valor;
  }else{
    suma_impares+=valor;
  }
} 
console.log(`el total de los numeros pares es:${suma_pares}`);
console.log(`el total de los numeros impares es:${suma_impares}`);