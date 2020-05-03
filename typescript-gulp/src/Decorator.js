"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
//Decorator class
function PerfilAdmin(usuarioLogado) {
    return function (ctor) {
        if (!usuarioLogado || !usuarioLogado.admin) {
            throw new Error("Sem permissão!");
        }
    };
}
var usuario = {
    name: "fulano",
    email: "fulano@gmail.com",
    admin: false
};
var MudancaAdministrativa = /** @class */ (function () {
    function MudancaAdministrativa() {
    }
    MudancaAdministrativa.prototype.critico = function () {
        console.log("Algo crítico foi alterado!");
    };
    MudancaAdministrativa = __decorate([
        PerfilAdmin(usuario)
    ], MudancaAdministrativa);
    return MudancaAdministrativa;
}());
new MudancaAdministrativa().critico();
new MudancaAdministrativa().critico();
new MudancaAdministrativa().critico();
new MudancaAdministrativa().critico();
var ContaCorrete = /** @class */ (function () {
    function ContaCorrete(saldo) {
        this.saldo = 0;
        this.cliente = "Renan";
        this.saldo = saldo;
    }
    ContaCorrete.prototype.depositar = function (valor) {
        this.saldo += valor;
    };
    __decorate([
        naoNegativo
    ], ContaCorrete.prototype, "saldo", void 0);
    __decorate([
        __param(0, logaParametro)
    ], ContaCorrete.prototype, "depositar", null);
    return ContaCorrete;
}());
//Decorator Prop
function naoNegativo(target, prop) {
    delete target[name];
    Object.defineProperty(target, prop, {
        get: function () {
            return target["_" + prop];
        },
        set: function (value) {
            if (value < 0)
                throw new Error("Não pode ser menor que 0");
            else {
                console.log("alterado com sucesso");
                target["_" + prop] = value;
            }
        }
    });
}
//Decorator Param
function logaParametro(target, method, index) {
    console.log("target = " + JSON.stringify(target) + "; method = " + method + "; index = " + index);
}
var cc = new ContaCorrete(10);
cc.saldo = 100;
cc.saldo = 0;
cc.saldo = -100;
