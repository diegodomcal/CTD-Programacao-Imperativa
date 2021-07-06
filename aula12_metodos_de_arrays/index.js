// Microdesafios

// Exercício 01

let pares = [0,2,4,6,8,10];

let impares = pares.map(num => num +1 );

console.log(impares);

//Exercício 2

let nomes = ['Maria', 'João' ,'José', 'Maria', 'Antônio'];

let marias = nomes.filter(el => el=='Maria');

console.log(marias);

// Exercício 03

let numeros = [1, 2, 3, 4, 5, 6];

let numStr = numeros.reduce((acumulador, el )=> {
    return acumulador + " - " + el;
})

console.log(numStr);

// Exercício 04

let animais = ["Elefante", "Girafa", "Tigre", "Zebra"];

let nomeAnimal = animais.forEach(animal => console.log("O nome do animal é " + animal));