// EXERCÍCIO "MEU CARDÁPIO"

function Restaurante(nome, ...cardapio) {
  this.nome = nome;
  this.cardapio = cardapio;
  this.entrada = function () {
    
    return "Seja bem-vindo ao " + this.nome + ". Este é o nosso cardápio:\n" + this.cardapio
  }   
}

let novoRestaurante =  new Restaurante("Bar do Zezinho", "Feijoada", "Baião de Dois", "Camarão na Moranga");

console.log(novoRestaurante, "\n\n");
console.log(novoRestaurante.entrada(), "\n\n");


// EXERCÍCIO VER NÚMEROS
// 1 - Adicionar arrays por meio de spread

let numerosPrimos = [2, 3, 5, 7, 11, 13];
let numeros = [...numerosPrimos, 14, 15, 16, 17,18];

console.log(numeros, "\n\n");


//2 - Parâmetro rest
function maiorNumero(...nums) {
   console.log(Math.min(...nums))
}

maiorNumero(10, 50, 23, 12, 100, 27, 8, 542);