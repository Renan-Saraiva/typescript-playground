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
var _a, _b, _c, _d;
var Comparator = /** @class */ (function () {
    function Comparator(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
    }
    return Comparator;
}());
var CompareNumber = /** @class */ (function (_super) {
    __extends(CompareNumber, _super);
    function CompareNumber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CompareNumber.prototype.Compare = function () {
        return this.valueA > this.valueB;
    };
    return CompareNumber;
}(Comparator));
var CompareString = /** @class */ (function (_super) {
    __extends(CompareString, _super);
    function CompareString() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CompareString.prototype.Compare = function () {
        return this.valueA.length > this.valueB.length;
    };
    return CompareString;
}(Comparator));
console.log(new CompareNumber(30, 20).Compare());
console.log(new CompareString("Renaaaaaaaaaan", "Juliana").Compare());
//-----------------------------------------------------------------------------
var Pessoa = /** @class */ (function () {
    function Pessoa() {
        this.Nome = "";
    }
    return Pessoa;
}());
var Idoso = /** @class */ (function (_super) {
    __extends(Idoso, _super);
    function Idoso() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Idade = 0;
        return _this;
    }
    return Idoso;
}(Pessoa));
var Queue = /** @class */ (function () {
    function Queue() {
        this.Queue = new Array();
    }
    Queue.prototype.Add = function (item) {
        this.Queue.push(item);
    };
    Queue.prototype.Next = function () {
        var item = this.Queue[0];
        if (item)
            this.Queue = this.Queue.slice(1);
        return item;
    };
    Queue.prototype.Print = function () {
        if (this.Queue.length == 0) {
            console.log('Queue ends');
            return;
        }
        this.Queue.forEach(function (item, index) {
            console.log("Positon = " + (index + 1) + " | Item = " + item.Nome);
        });
    };
    return Queue;
}());
var FilaDePessoas = new Queue();
FilaDePessoas.Add({ Nome: "Renan" });
FilaDePessoas.Add({ Nome: "Zenilda" });
FilaDePessoas.Add({ Nome: "Juliana" });
var idoso = {
    Nome: "Manoel",
    Idade: 63
};
FilaDePessoas.Add(idoso);
FilaDePessoas.Add({ Nome: "Vitor" });
FilaDePessoas.Print();
console.log("Atendemos " + ((_a = FilaDePessoas.Next()) === null || _a === void 0 ? void 0 : _a.Nome));
console.log("Atendemos " + ((_b = FilaDePessoas.Next()) === null || _b === void 0 ? void 0 : _b.Nome));
FilaDePessoas.Print();
console.log("Atendemos " + ((_c = FilaDePessoas.Next()) === null || _c === void 0 ? void 0 : _c.Nome));
FilaDePessoas.Print();
console.log("Atendemos " + ((_d = FilaDePessoas.Next()) === null || _d === void 0 ? void 0 : _d.Nome));
FilaDePessoas.Print();
