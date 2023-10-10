const Animal = require("./Animal.js");

class Gato extends Animal{
    
    constructor(sonido){
        super();
        console.log("Inicializando Gato");
        this._sonido = sonido;
    }
    
    maulla(){
        console.log("Maullando");
    }
    
}

module.exports = Gato;