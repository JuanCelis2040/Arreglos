/*Punto Uno*/
let j = [200, -100, 45, 78, 32];
console.log(j.splice(2,3));

/*Punto Dos*/
let f = ["ab", "cd", "ef", "gh"];
console.log(f[1], f[3]);

/*Punto Tres*/
let aux = [10, true, "k200", 20.7];
aux.forEach(a => {
    console.log(a);
});

/*Punto Cuatro*/
let k = [17, 4, 64, 79, 109, 112];
k.forEach(a =>{
    if (a%2 != 0) {
        console.log(a);
    }
})

/*Punto Cinco*/
let h = [true, true, false,true, false];
h.splice(2,1,true)
h.splice(3,1,false)
console.log(h);

/*Punto Seis*/
let w = ["wc", "jp", "zx", "qr"];
w.splice(1,1,true)
w.splice(3,1,30)
console.log(w);

/*Punto Siete*/
function recorrido(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
let verificador = recorrido([2, 5, 7, 9]);

/*Punto Ocho*/
function numeroElementos(array) {
    return array.length
}
verificador = numeroElementos([2,3])
console.log(verificador);


/*Punto Nueve*/
let arreglo = [30, 44, 54, 89, 100];
let indice44 = arreglo.indexOf(44)
let indice89 = arreglo.indexOf(89)
let indice70 = arreglo.indexOf(70)
console.log(indice44,indice70,indice89); 
// Imprime: -1 (indicando que el elemento no se encuentra en el arreglo

let elementosBuscar = [44,89,70]
let indices = [];
for (let i = 0; i < arreglo.length; i++) {
    let elemento = arreglo[i]
    if (elementosBuscar.includes(elemento)) {
        indices.push(i)
    }
}
console.log(indices);

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
let verificadorNueve = alfabeto("h")
console.log(verificadorNueve)

let arregloDiez = [3, 50, 70, 600, 40];
/*Punto Uno*/
arregloDiez.forEach(a => {
    console.log(a);
});

/*Punto Dos*/
arregloDiez.forEach(a => {
    console.log(a*3);
})

/*Punto Tres*/
let contador = 0;
while (contador < arregloDiez.length) {
    console.log(arregloDiez[contador]);
    contador++
}

/*Punto Cuatro*/
for (let i = 0; i < arregloDiez.length; i++) {
    if (arregloDiez[i]%2 == 0) {
        console.log(arregloDiez[i]);
    }
}

/*Punto Cinco*/
let arregloOnce = ["Maria", "Pedro", "Juan", "Pablo", "Diana"];
let nombre = false;
for (let i = 0; i < arregloOnce.length; i++) {
    if (arregloOnce.includes("Juan")) {
        nombre = true;
        break;
    }
}
if (nombre == true) {
    console.log("El arreglo si incluye Juan");
} else {
    console.log("El arreglo no inclute Juan");
}

/*Punto Seis*/
let arregloDoce = ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"];
let cantidadDoce = 0;
for (let i = 0; i < arregloDoce.length; i++) {
    if (arregloDoce[i].includes("Maria")) {
        cantidadDoce++
    }
}
console.log(`Maria se encuentra ${cantidadDoce} veces en el arreglo [${arregloDoce}]`);

/*Punto Siete*/
let arregloTrece = [15, 7, 9, 12, 1]
let sumaTrece = 0;
let contadorTrece = 0; 
arregloTrece.forEach(a =>{
    sumaTrece += arregloTrece[contadorTrece];
    contadorTrece++
});
console.log(`La suma de los elementos del arreglo ${arregloTrece} es ${sumaTrece}`)

/*Punto Ocho*/
let arregloCatorce = [-2, 8, 99, 1, 7];
let sumaCatorce = 0;
let contadorCatorce = 0;
let cuadradoCatorce = 0;
arregloCatorce.forEach(a =>{
    cuadradoCatorce = arregloCatorce[contadorCatorce]*arregloCatorce[contadorCatorce];
    sumaCatorce += cuadradoCatorce;
    contadorCatorce++
})
console.log(`La suma de los cuadrados de los elementos del arreglo ${arregloCatorce} es ${sumaCatorce}`);

/*Punto Nueve*/
let arregloQuince = [true, true, false, true, false, false];
let cantidadQuince = 0;
let contadorQuince = 0;
while (contadorQuince < arregloQuince.length) {
    contadorQuince++
    if (arregloQuince[contadorQuince] == false) {
        cantidadQuince++
    }
}
console.log(`El elemento false si encuentra ${cantidadQuince} en el arreglo ${arregloQuince}`);

/*Punto Diez*/
let arregloDieciseis = ["z", "p", "s", "z", "o", "b", "a", "w", "d"];
let palabra = "adso";
let posibilidad = true;
for (let i = 0; i < palabra.length; i++) {
    if (!arregloDieciseis.includes(palabra[i]) ) {
        posibilidad = false;
        break;
    }
}
if (posibilidad) {
    console.log("Si es posible formar la palabra adso");
} else {
    console.log("No es posible formar la palabra adso");
}

/*Punto Once*/
let arregloDiecisiete = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
for (let i = 0; i < arregloDiecisiete.length; i++) {
    console.log(`5*${arregloDiecisiete[i]} es igual a ${arregloDiecisiete[i]*5}`);
    
}

/*Punto Doce*/
let arregloDieciocho = [5, 7, 90, 2, 5, 3, 8, 99]; 
arregloDieciocho.forEach(a =>{
    arregloDieciocho.forEach(b =>{
        if (a+1 === b) {
            console.log(a,"y",b,"son consecutivos");
        }
    })
})

