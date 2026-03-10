const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// Servir archivos estáticos desde la carpeta raíz del repo
app.use(express.static(path.join(__dirname)));

app.get("/health", (_req, res) => res.status(200).send("ok"));

app.listen(port, () => {
  console.log(`App corriendo en puerto ${port}`);
});
