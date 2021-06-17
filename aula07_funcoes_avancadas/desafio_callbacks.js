let andar = () => console.log("O carro está andando.");
let parar = () => console.log("o carro parou.");

let acaoCarro = (callback) => callback();

acaoCarro(andar);
acaoCarro(parar);