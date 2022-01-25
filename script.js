const nombre = "Kary Rodriguez"; //Declaración de una constante
let edad = 35 //Declaración de una variable
let decision = true //Tipo de dato boolean (false / true)

console.log("Mi nombre es " + nombre +  " y tengo " + edad + " años");
console.log(decision)

//Ejemplo de condicional
if (decision) {
    console.log("Se cumple la decisión")
} else {
    console.log("No se cumple con la condición")
}

//Otro ejemplo de condicional
if (edad > 18) {
    console.log(nombre + "es mayor de edad");
} else {
    
}

//Condicional con OR 
if (edad > 18 || nombre == "Karys" ) {
    console.log(nombre + "es mayor de edad");
} else {
    console.log("No se cumplió ninguna de las condiciones del if")
}

//Condicional con AND
if (edad > 18 && nombre == "Karys" ) {
    console.log(nombre + "es mayor de edad");
} else {
    console.log("No se cumplió ninguna de las condiciones del if")
}

//if, else if, else

// == Compara solamente valor
// === Compara valor y tipo de dato

//Condicional ternario
if (edad > 18 ? console.log("Es mayor de edad") :  console.log("Es menor de edad"));

//Ciclos
for (let index = 0; index < 10; index++) {
console.log("El valor del indice es " + index)    
}

for (let index = 0; index < 10; index++) {
    if (index === 2) {
        console.log("2");
        break;
    }  
    console.log("Otro código"); 
    }

const arreglo = ["Jesús", "Juan", "María", "Ramón"]

for (let indice = 0; indice < arreglo.length; indice++) {
    console.log("El nombre de la persona es " + arreglo[indice]);   
}

//For each
arreglo.forEach((nombre) =>
console.log("El nombre de la persona es " + nombre));

//While
let contador = 0
while(contador <= 10) {
    console.log(contador);
    contador++;
}


const name = "Yiya Rguez";
console.log(`Mi nombre es ${nombre}`); //Template string

//Funciones 
function Saludar(){
 console.log("Hello desde una función");
}

Saludar(); //Llamando a la función

//Función que recibe un parámetro
function Saludar2(nombre, apellido){
    console.log(`Hola ${nombre} ${apellido}`);
   }
Saludar2("Karys", "Rguez");

function alerta() {
    alert("Bienvenida a la página");
}

const esMayor = (edad) => {
    if(edad >= 18) {
        return true
    } else {
        return false
    }
};

const variable = esMayor(78)
console.log(variable);
