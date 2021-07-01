function microondas (prato, tempo) {
    let msg = ""
    switch (prato) {
        
        // 1 - PIPOCA
        case 1 : if (tempo >= 10 && tempo < 20) {
            msg = "Prato pronto, bom apetite!!!";

        } else if(tempo < 10) {
            msg = "Tempo insuficiente.";

        } else if(tempo >= 20 && tempo < 30) {
            msg = "Comida queimou.";
        
        } else if (tempo >= 30){
            msg = "kabummm";
        }
        break;

        // 2 - MACARRÃO
        case 2 : if (tempo >= 8 && tempo < 16) {
            msg = "Prato pronto, bom apetite!!!";

        } else if(tempo < 8) {
            msg = "Tempo insuficiente.";
        
        } else if(tempo >= 16 && tempo < 24) {
            msg = "Comida queimou.";
        

        } else if (tempo >= 24){
            msg = "kabummm";
        }
        break;

        // 3 - CARNE
        case 3 : if (tempo >= 15 && tempo < 30) {
            msg = "Prato pronto, bom apetite!!!";

        } else if(tempo < 15) {
            msg = "Tempo insuficiente.";

        } else if(tempo >= 30 && tempo < 45) {
            msg = "Comida queimou.";
        

        } else if (tempo >= 45){
            msg = "kabummm";
        }
        break;

        // 4 - FEIJÃO
        case 4 : if (tempo >= 12 && tempo < 36) {
            msg = "Prato pronto, bom apetite!!!";

        } else if(tempo < 12) {
            msg = "Tempo insuficiente.";
     
        } else if(tempo >= 24 && tempo < 36) {
            msg = "Comida queimou.";
     
        } else if (tempo >= 36){
            msg = "kabummm";
        }
        break;
        
        // 5 - BRIGADEIRO
        case 5 : if (tempo >= 10 && tempo < 20) {
            msg = "Prato pronto, bom apetite!!!";

        } else if(tempo < 10) {
            msg = "Tempo insuficiente.";

        } else if(tempo >= 20 && tempo < 30) {
            msg = "Comida queimou.";
        
        } else if (tempo >= 30){
            msg = "kabummm";
        }
        break;

        // PRATO INVÁLIDO
        default : msg = "Prato inválido";
    }
    return msg;
}

console.log(microondas(1, 15))
console.log(microondas(1, 22))
console.log(microondas(1, 34))
console.log(microondas(1, 8))
console.log(microondas(7,1))