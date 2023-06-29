/*Punto Uno*/
let mensaje = "Javascript es un buen lenguaje";
//a):
console.log(mensaje[3]);
console.log(mensaje[6]);
console.log(mensaje[8]);

//b):
for (let index = 0; index < mensaje.length; index++) {
    console.log(mensaje[index]);
}

/*Punto Dos*/
let mensajeDos = "Somos SENA";
//a):
console.log(mensajeDos[7]);

//b):
let repitidor = 0;
for (let x = 0; x < mensajeDos.length; x++) {
    if (mensajeDos[x]== "o") {
        repitidor++
    }
}
console.log(`El caracter o de la cadena ${mensajeDos} se repite ${repitidor}`);

/*Punto Tres*/
let mensjaeTres = "Javascript es genial";
let contador = 0;
for (let i = 0; i < mensjaeTres.length; i++) {
    contador++
}
console.log(`La cadena ${mensjaeTres} posee ${contador} caracteres`);