import $ from 'jquery'


abstract class Comparator<T, R> {
    
    constructor(protected valueA: T, protected valueB: T) { }

    abstract Compare() : R;    
}

class CompareNumber extends Comparator<Number, Boolean> {
    Compare(): Boolean {
        return this.valueA > this.valueB
    }
}


class CompareString extends Comparator<string, Boolean> {
    Compare(): Boolean {
        return this.valueA.length > this.valueB.length 
    }
}

console.log(new CompareNumber(30,20).Compare());
console.log(new CompareString("Renaaaaaaaaaan","Juliana").Compare());

//-----------------------------------------------------------------------------


class Pessoa  {
    Nome: string = ""
}

class Idoso extends Pessoa {
    Idade: number = 0
}

class Queue<T extends Pessoa> {

    private Queue: Array<T>;

    constructor() {
        this.Queue = new Array<T>();
    }

    Add(item: T) {
        this.Queue.push(item);
    }

    Next(): T | undefined {

        var item: T | undefined = this.Queue[0];

        if (item)
            this.Queue = this.Queue.slice(1);

        return item;
    }

    Print(): void {

        if (this.Queue.length == 0) {
            console.log('Queue ends')
            return;
        }            

        this.Queue.forEach((item: T, index: number) => {
            console.log(`Positon = ${index + 1} | Item = ${item.Nome}`);
        })
    }
}

let FilaDePessoas = new Queue<Pessoa>();

FilaDePessoas.Add({ Nome: "Renan"});
FilaDePessoas.Add({ Nome: "Zenilda"});
FilaDePessoas.Add({ Nome: "Juliana"});

const idoso: Idoso = {
    Nome: "Manoel",
    Idade: 63
};
FilaDePessoas.Add(idoso);
FilaDePessoas.Add({ Nome: "Vitor"});
FilaDePessoas.Print();


$('body').append(`<br />Atendemos ${FilaDePessoas.Next()?.Nome}`);
$('body').append(`<br />Atendemos ${FilaDePessoas.Next()?.Nome}`);

FilaDePessoas.Print();
$('body').append(`<br />Atendemos ${FilaDePessoas.Next()?.Nome}`);
FilaDePessoas.Print();
$('body').append(`<br />Atendemos ${FilaDePessoas.Next()?.Nome}`);
FilaDePessoas.Print();