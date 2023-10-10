const Animal = require("./Animal.js");

class Perro extends Animal{

    constructor(sonido){
        super();
        this._sonido = sonido;
    }

    ladra(){
        console.log("ladrando");
    }
}

module.exports = Perro;