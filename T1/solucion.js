/*Punto Uno*/
arregloUno = [ ["a", "z", "t"], [789, 887, 451], [true, false, 0]]
//a).
console.log(arregloUno[0][1]);

//b).
console.log(arregloUno[1][0]);

//c).
console.log(arregloUno[2][2]);

//d).
console.log(arregloUno[2][1]);

/*Punto Dos*/
arregloDos =  [ [ ["%", 7, true, "#"] ], [ [false, 0, 99, "?"] ], [ [44, 55, 66, 77] ] ]
//a).
console.log(arregloDos[1][0][3]);

//b).
console.log(arregloDos[2][0][2]);

//c).
console.log(arregloDos[0][0][2]);

//d).
console.log(arregloDos[0][0][0]);

//e).
console.log(arregloDos[0][0][2]);

//f).
console.log(arregloDos[2][0][0]);

//g).
console.log(arregloDos[1][0][3]);

//h).
//No imprime nada = console.log(arregloDos[0][1][1]);

/*Punto Tres*/
arregloTres= [ [ [0], [2, 77] ], [ ["&", true, "!!"], [[88]] ], [ [ [ [1] ] ] ], "¿" ]
//a).
console.log(arregloTres[1][0][1]);

//b).
console.log(arregloTres[2][0][0][0][0]);

//c).
console.log(arregloTres[0][1][1]);

//d).
console.log(arregloTres[1][1][0][0]);

//e).
console.log(arregloTres[3]);

/*Punto Cuatro*/
arregloCuatro= [ [50, 60, 70], ["q", "%", "$"], ["?", ">", "<"], [1 , -8, -2] ]
//a).
console.log(arregloCuatro[1]);
arregloCuatro[1][1] = "?";
console.log(arregloCuatro[1]);

//b).
console.log(arregloCuatro[3]);
arregloCuatro[3][1] = 9;
console.log(arregloCuatro[3]);

//c).
console.log(arregloCuatro[0]);
arregloCuatro[0][0] = "¡";
console.log(arregloCuatro[0]);

//d).
arregloCuatro[1].splice(2);
console.log(arregloCuatro);

//e).
arregloCuatro[0].splice(2);
console.log(arregloCuatro);

//f).
arregloCuatro[3].splice(2);
console.log(arregloCuatro);
