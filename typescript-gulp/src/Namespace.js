"use strict";
//Teste de escopo
var totalVendas = 20;
var Lojas;
(function (Lojas) {
    var totalVendas = 10;
    function ImprimirVendas() {
        console.log("Vendas: ", totalVendas);
    }
    Lojas.ImprimirVendas = ImprimirVendas;
    var Estoque;
    (function (Estoque) {
        var totalEstoque = 20;
        function ImprimirEstoque() {
            console.log("Estoque: ", totalEstoque);
        }
        Estoque.ImprimirEstoque = ImprimirEstoque;
    })(Estoque = Lojas.Estoque || (Lojas.Estoque = {}));
})(Lojas || (Lojas = {}));
Lojas.ImprimirVendas();
Lojas.Estoque.ImprimirEstoque();
