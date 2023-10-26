import config from "../config.js";
import ModelFactory from "../model/DAO/modelFactory.js";

class Servicio {
  constructor() {
    this.model = ModelFactory.get(config.MODO_PERSISTENCIA);
  }

  guardarNumero = async (numero) => {
    const numeroGuardado = await this.model.guardarNumero(
      Number(numero.numero)
    );
    return numeroGuardado;
  };

  obtenerNumeros = async () => {
    let numeros = await this.model.obtenerNumeros();
    return { ["numeros"]: numeros };
  };

  obtenerPromedio = async () => {
    let numeros = await this.model.obtenerNumeros();
    let cantidad = numeros.length;
    let sumaNumeros = numeros.reduce((a, b) => a + b, 0);
    let promedio = sumaNumeros / cantidad;
    return { ["promedio"]: promedio };
  };

  obtenerMinMax = async () => {
    let numeros = await this.model.obtenerNumeros();
    const numeroMin = Math.min(...numeros.map((n) => n));
    const numeroMax = Math.max(...numeros.map((n) => n));
    return { ["min"]: numeroMin, ["max"]: numeroMax };
  };

  obtenerCantidad = async () => {
    let numeros = await this.model.obtenerNumeros();
    let cantidad = numeros.length;
    return { ["cantidad"]: cantidad };
  };
}

export default Servicio;
