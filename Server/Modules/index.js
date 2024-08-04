import express from "express";
const app = express();
const port = process.env.PORT || 8080;

import lojaRoutes from "./Produtos/routes/index.js";
//const usuarioRoutes = require("./Usuario/routes/index.js");

app.use("/Loja", lojaRoutes);
//app.use("/Usuario", usuarioRoutes);

app.listen(port, () => {
    console.log(`Server is running on  port ${port}`);
});