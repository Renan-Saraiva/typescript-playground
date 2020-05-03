"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var dobro = function (valor) { return valor * 2; };
console.log(dobro(10));
// Exercicio 2
var dizerOla = function (nome) {
    if (nome === void 0) { nome = "Pessoa"; }
    console.log("Ola, " + nome);
};
dizerOla();
dizerOla("Anna");
// Exercicio 3
var nums = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, nums));
// Exercicio 4
var array = __spreadArrays([55, 20], nums);
//array.push(...array);
console.log(array);
// Exercicio 5
var notas = [8.5, 6.3, 9.4, 10];
var nota1 = notas[0], nota2 = notas[1], nota3 = notas[2];
console.log(nota1, nota2, nota3);
// Exercicio 6
var cientista = {
    primeiroNome: "Will", experiencia: 12, others: {
        pro1: 10
    }
};
var a = cientista.primeiroNome, experiencia = cientista.experiencia, pro1 = cientista.others.pro1;
console.log(a, experiencia, pro1);
//---------------------------------
var delay = function (callback) {
    setInterval(function () { return callback("OI"); }, 3000);
};
delay(function (entrada) { return console.log("Retornou ", entrada); });
