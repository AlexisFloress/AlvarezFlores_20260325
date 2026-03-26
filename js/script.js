var variableVarPi = 3.14156;

let variableLetEuler = 2.718281;

const contantPlank = 6.6260;

console.log({variableVarPi});
console.log({variableLetEuler});
console.log({contantPlank});
console.log({document});

let variable;

variable = 1.234;
console.log({variable});
variable = false;
console.log({variable});
variable = "hola";
console.log({variable});

let diaActual = new Date();

let fechaHora = diaActual.getDate()+"/"+diaActual.getMonth()+"/"+diaActual.getFullYear()+"/"+" "+diaActual.getHours()+": "+diaActual.getMinutes()+":"+diaActual.getSeconds();
console.log(fechaHora);

let dia = diaActual.getDate();
let mes = (diaActual.getMonth() + 1).toString().padStart(2,"0");
let year = diaActual.getFullYear();
let hora = diaActual.getHours();
let minuto = diaActual.getMinutes();
let segundo = diaActual.getSeconds();

let fechaHora2 = `${dia}/${mes}/${year} ${hora}:${minuto}:${segundo}`
//console.log({fechaHora2});
//console.log({diaActual});

let mensajeEnHTML = document.getElementById("mensajito");
//alert(mensajeEnHTML.innerHTML)
//alert(mensajeEnHTML.textContent)

let parrafo = document.getElementById("mensajito").children[0].textContent;
//alert(parrafo);

let contenedor = document.getElementById("mensajito");
const parrafomensaje = contenedor.querySelector('[data-identificador="submensaje3"]');
//alert(parrafomensaje.textContent);

const height = window.innerHeight;
const width = window.innerWidth;
//alert("su pantalla posee "+ height+ " pixeles de alto y "+width+" pixeles de ancho");
console.log("window.screen.width: "+ window.screen.width+"px ", "window.screen.height: " + window.screen.height + "px");

console.log("window.screen.availWidth: "+ window.screen.availWidth+"px ", "window.screen.availHeight: " + window.screen.availHeight + "px");

console.log("document.body.clientWidth" + document.body.clientWidth + "px document.body.clientHeight: " + document.body.clientHeight + "px")