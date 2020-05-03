"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Produto = /** @class */ (function () {
    function Produto(nome, preco, desconto) {
        if (desconto === void 0) { desconto = 0; }
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
        this._quantidade = 0;
    }
    Object.defineProperty(Produto.prototype, "quantidade", {
        get: function () {
            return this._quantidade;
        },
        set: function (value) {
            this._quantidade = value < 0 ? 0 : value;
        },
        enumerable: true,
        configurable: true
    });
    Produto.prototype.precoComDesconto = function () {
        return this.preco * (1 - this.desconto);
    };
    Produto.CreateGabinete = function () {
        return new Produto("Gabinete", 200);
    };
    return Produto;
}());
var hd = new Produto("HD", 100.59, 0.155458);
var ssd = new Produto("SSD", 300, 0.2);
var ram = new Produto("RAM", 300);
hd.preco = 200;
console.log(Math.round(hd.precoComDesconto()), ssd.precoComDesconto(), ram.precoComDesconto());
console.clear();
hd.quantidade = 100;
ssd.quantidade = -200;
console.log(hd.quantidade, ssd.quantidade);
console.clear();
console.log(Produto.CreateGabinete());
console.clear();
//Classes abstrata
var Loja = /** @class */ (function () {
    function Loja() {
        this._totalVendas = 0;
    }
    Loja.prototype.totalDeVendas = function () {
        return this._totalVendas;
    };
    return Loja;
}());
var GuarulhosLoja = /** @class */ (function (_super) {
    __extends(GuarulhosLoja, _super);
    function GuarulhosLoja() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GuarulhosLoja.prototype.vender = function (produto) {
        this._totalVendas++;
    };
    return GuarulhosLoja;
}(Loja));
var filialGuarulhos = new GuarulhosLoja();
filialGuarulhos.vender(ssd);
console.log("Total de vendas guarulhos: ", filialGuarulhos.totalDeVendas());
