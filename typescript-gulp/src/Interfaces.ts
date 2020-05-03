interface Humano {
    nome: string;
    idade?: number;    
    [prop: string]: any;

    saudar?(sobrenome: string): void; //Função opcional
}

var humano: Humano =  {
    nome: "",
    "teste": true,
    "teste2": true
}

//Interface para funcão 
interface Calculo {
    (valor: number, expo: number): number
}

let potencia: Calculo = (valor: number, expo: number): number => {
    //return Math.pow(valor, expo);
    //return Array(expo).fill(valor).reduce((totalizado, atual) => totalizado * atual);
    return valor ** expo;
}

function Executa(func: Calculo, valor: number, expo: number) : number  {
    return func(valor, expo);
}

console.log(Executa(potencia, 10, 2)); //100


//----------------------------------------------

interface A {
    a(): void
}

interface B {
    b(): void
}

interface ABC extends A, B{
    c(): void
}

class ABCImplementation implements ABC {
    c(): void { }
    a(): void { }
    b(): void { }
}

abstract class ABCImplementationAbstratcion implements ABC {
    abstract c(): void
    abstract a(): void
    abstract b(): void
}