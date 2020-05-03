class Produto { 

    private _quantidade: number = 0;
    get quantidade() : number {
        return this._quantidade;
    }
    set quantidade(value: number) {
        this._quantidade = value < 0 ? 0 : value;    
    }

    constructor(
        public nome: string,
        public preco: number,
        public desconto: number = 0
    ) { }


    precoComDesconto(): number {
        return this.preco * (1 - this.desconto);
    }

    static CreateGabinete(): Produto {
        return new Produto("Gabinete", 200);
    }
}

const hd = new Produto("HD", 100.59, 0.155458) 
const ssd = new Produto("SSD", 300, 0.2)
const ram = new Produto("RAM", 300)

hd.preco = 200;

console.log(Math.round(hd.precoComDesconto()),
            ssd.precoComDesconto(),
            ram.precoComDesconto());

console.clear()

hd.quantidade = 100;
ssd.quantidade = -200;
console.log(hd.quantidade, ssd.quantidade);

console.clear()

console.log(Produto.CreateGabinete());

console.clear();


//Classes abstrata
abstract class Loja {
    protected _totalVendas: number = 0;
    abstract vender(produto: Produto): void;

    totalDeVendas() { 
        return this._totalVendas;        
    }
}

class GuarulhosLoja extends Loja {
    vender(produto: Produto): void{
        this._totalVendas++;
    }
}

const filialGuarulhos: Loja = new GuarulhosLoja();
filialGuarulhos.vender(ssd);
console.log("Total de vendas guarulhos: ", filialGuarulhos.totalDeVendas());