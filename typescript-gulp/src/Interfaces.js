"use strict";
var humano = {
    nome: "",
    "teste": true,
    "teste2": true
};
var potencia = function (valor, expo) {
    //return Math.pow(valor, expo);
    //return Array(expo).fill(valor).reduce((totalizado, atual) => totalizado * atual);
    return Math.pow(valor, expo);
};
function Executa(func, valor, expo) {
    return func(valor, expo);
}
console.log(Executa(potencia, 10, 2)); //100
var ABCImplementation = /** @class */ (function () {
    function ABCImplementation() {
    }
    ABCImplementation.prototype.c = function () { };
    ABCImplementation.prototype.a = function () { };
    ABCImplementation.prototype.b = function () { };
    return ABCImplementation;
}());
var ABCImplementationAbstratcion = /** @class */ (function () {
    function ABCImplementationAbstratcion() {
    }
    return ABCImplementationAbstratcion;
}());
