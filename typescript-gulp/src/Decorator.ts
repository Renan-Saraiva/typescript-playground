type Usuario = {name: string, email: string, admin: boolean}
 
//Decorator class
function PerfilAdmin(usuarioLogado: Usuario) {
    return (ctor: Function) => {
        if(!usuarioLogado  || !usuarioLogado.admin) {
            throw new Error("Sem permissão!")
        }
    }
}
 
const usuario = {
    name: "fulano",
    email: "fulano@gmail.com",
    admin: false
}
@PerfilAdmin(usuario)
class MudancaAdministrativa {
    critico() {
        console.log("Algo crítico foi alterado!");
    }
}

new MudancaAdministrativa().critico()
new MudancaAdministrativa().critico()
new MudancaAdministrativa().critico()
new MudancaAdministrativa().critico()


class ContaCorrete {
    @naoNegativo
    public saldo: number = 0;
    public cliente: string = "Renan"

    constructor(saldo: number) {
        this.saldo = saldo;
    }

    depositar(@logaParametro valor: number): void {
        this.saldo += valor;
    }
}

//Decorator Prop
function naoNegativo(target: any, prop: string) {
    delete target[name];

    Object.defineProperty(target, prop, {
        get: function(): number {
            return target["_" + prop];
        },
        set: function(value: number)  {
            if (value < 0)
                throw new Error("Não pode ser menor que 0")
            else {
                console.log("alterado com sucesso");
                target["_" + prop] = value;
            }                
        }
    });
}

//Decorator Param
function logaParametro(target: any, method: string, index: number) {
    console.log(`target = ${JSON.stringify(target)}; method = ${method}; index = ${index}`)
}

var cc = new ContaCorrete(10);

cc.saldo = 100;
cc.saldo = 0;
cc.saldo = -100;