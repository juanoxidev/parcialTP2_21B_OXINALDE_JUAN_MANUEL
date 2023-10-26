import ModelMem from "./modelMem.js";

class ModelFactory {
  static get(tipo) {
    switch (tipo) {
      case "MEM":
        console.log("**** Persistiendo en Memoria ****");
        return new ModelMem();
      default:
        console.log("**** Persistiendo Default en Memoria ****");
        return new ModelMem();
    }
  }
}

export default ModelFactory;
