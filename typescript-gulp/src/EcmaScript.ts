const dobro = (valor: number): number => valor * 2

console.log(dobro(10));
 
// Exercicio 2
const dizerOla = function (nome: string = "Pessoa") {
    console.log("Ola, " + nome)
}
 
dizerOla()
dizerOla("Anna")
 
// Exercicio 3
const nums = [-3, 33, 38, 5]
console.log(Math.min(...nums))
 
// Exercicio 4
const array = [55, 20, ...nums]
//array.push(...array);
console.log(array)
 
// Exercicio 5
const notas = [8.5, 6.3, 9.4, 10];
const [nota1, nota2, nota3] = notas;
console.log(nota1, nota2, nota3);
 
// Exercicio 6
const cientista = {
    primeiroNome: "Will", experiencia: 12, others: {
        pro1: 10
    }
};
const { primeiroNome: a, experiencia, others: { pro1 } } = cientista;

console.log(a, experiencia, pro1)

//---------------------------------

var delay = function (callback: (valor: string) => void) {
    setInterval(
        () => callback("OI"),
        3000
    )
}

delay(
    (entrada: string) => console.log("Retornou ",entrada)
)