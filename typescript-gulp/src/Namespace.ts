//Teste de escopo
const totalVendas = 20;

namespace Lojas {

    let totalVendas = 10;

    export function ImprimirVendas() : void {
        console.log("Vendas: ", totalVendas);
    }

    export namespace Estoque {

        let totalEstoque = 20;

        export function ImprimirEstoque(): void {
            console.log("Estoque: ", totalEstoque);
        }
    }    
}

Lojas.ImprimirVendas();
Lojas.Estoque.ImprimirEstoque();