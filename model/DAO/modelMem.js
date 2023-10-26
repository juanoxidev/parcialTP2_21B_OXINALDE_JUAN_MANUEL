class ModelMem {
  constructor() {
    this.numeros = [];
  }

  obtenerNumeros = async () => {
    try {
      return this.numeros;
    } catch (error) {
      console.log("error al obtener numeros", error);
      return [];
    }
  };

  guardarNumero = async (numeroNuevo) => {
    try {
      this.numeros.push(numeroNuevo);
      return numeroNuevo;
    } catch (error) {
      console.log("error al cargar el numero:", error);
      let numero = {};

      return numero;
    }
  };
}

export default ModelMem;
