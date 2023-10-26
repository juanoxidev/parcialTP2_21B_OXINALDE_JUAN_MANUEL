import express from "express";
import Router from "./router/numerosRouter.js";
import config from "./config.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/numeros", new Router().start());

const PORT = config.PORT;
const server = app.listen(PORT, () =>
  console.log(`Servidor express escuchando en http://localhost:${PORT}`)
);

server.on("error", (error) =>
  console.log(`Error en servidor: ${error.message}`)
);
