import Servicio from "../servicio/numerosServicio.js";

class Controlador {
  constructor() {
    this.servicio = new Servicio();
  }

  guardarNumero = async (req, res) => {
    const numero = req.body;
    const numeroGuardado = await this.servicio.guardarNumero(numero);
    res.redirect("/");
  };

  obtenerNumeros = async (req, res) => {
    const numeros = await this.servicio.obtenerNumeros();
    res.json(numeros);
  };

  obtenerPromedio = async (req, res) => {
    const promedio = await this.servicio.obtenerPromedio();
    res.json(promedio);
  };

  obtenerCantidad = async (req, res) => {
    const cantidad = await this.servicio.obtenerCantidad();
    res.json(cantidad);
  };

  obtenerMinMax = async (req, res) => {
    const minMax = await this.servicio.obtenerMinMax();
    res.json(minMax);
  };
}

export default Controlador;
