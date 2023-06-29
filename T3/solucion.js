/*Punto Uno*/
//a).
let arregloUnoA = [1,2,3,4,5,6,7,8,9,10];
console.log(arregloUnoA.length); 

//b).
let arregloUnoB = []; 
console.log(arregloUnoB.length);

//c).
let arregloUnoC = ["a", true, -1];
console.log(arregloUnoC.length);

//d).
let arregloUnoD = [2, 4, 5, 7, 1, 34, 89, 0];
console.log(arregloUnoD.length);

/*Punto Dos*/
let arregloDos = [1,2,3,4,5,6,7,8,9,10];
//a).
arregloDos.push(345)
console.log(arregloDos);

//b).
arregloDos.push(true)
console.log(arregloDos);

//c).
arregloDos.push("ADSO")
console.log(arregloDos);

//d).
arregloDos.push(455,78, false)
console.log(arregloDos);

//e).
arregloDos.push("ABcd", true, 21)
console.log(arregloDos);

/*Punto Tres*/
//a).
let arregloTresA = [1, 2, false];
arregloTresA.splice(2,1)
console.log(arregloTresA);

//b).
let arregloTresB =  [99, false, 17, 45, 7, "abc", 78]
arregloTresB.splice(6)
console.log(arregloTresB);

//c).
let arregloTresC =  [-1, -55, -89, -30, 1000]
arregloTresC.splice(1,1)
console.log(arregloTresC);

//d).
let arregloTresD =  ["zxc", 767, 1298, true, false, [3], 1]
arregloTresD.splice(1,4)
console.log(arregloTresD);

//e).
let arregloTresE =  [34, ["q"], 67, 1, 99, 1/2] 
arregloTresE.splice(3,2)
console.log(arregloTresE);

/*Punto Cuatro*/
let arregloCuatro = [2, 6, 9, 0, 5]
let arregloCuatroCopia = arregloCuatro;
arregloCuatroCopia.push(23)
console.log(arregloCuatro, arregloCuatroCopia);

/*Punto Cinco*/
let arregloCinco = ["abc", 4, 88, 99];
let arregloCincoCopia = arregloCinco.slice()
arregloCinco.push("Yaoi")
console.log(arregloCincoCopia, arregloCinco);

/*Punto Seis*/
let arregloSeis =  ["x", "y", "z", 0, 1, 2, 3]
for (let i = 0; i < arregloSeis.length; i++) {
    console.log(arregloSeis[i]);
}

/*Punto Siete*/
let arregloSiete =  [1, 17, 8, 9, 3];
for (let i = 0; i < arregloSiete.length; i++) {
    console.log(arregloSiete[i]+1);
}

/*Punto Ocho*/
function retornoArreglos(array) {
    return `la longitud del array [${array}] es ${array.length}`
}
let verificadorOcho = retornoArreglos([1, 17, 8, 9, 3]);
console.log(verificadorOcho);

/*Punto Nueve*/
let arregloNueve = ["a", "b", "c", "d", "e", "f", "g"]; 
function alfabeto(letra) {
    if (arregloNueve.includes(letra)) {
        return `El caracter ${letra} si se encuentra en el arreglo`
    }
    else {
        return `El caracter ${letra} no se encuentra en el arreglo`
    } 
}
let verificadorNueve = alfabeto("b")
console.log(verificadorNueve)
