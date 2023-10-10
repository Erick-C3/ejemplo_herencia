class Animal{
    #nombre;
    #edad;
    #coloresPelaje;
    _sonido;

    constructor() {
        console.log("Inicializando Animal");
    }

    come(){
        console.log("comiendo");
    }

    hacerSonido(){
        console.log(this._sonido);
    }
}

module.exports = Animal;