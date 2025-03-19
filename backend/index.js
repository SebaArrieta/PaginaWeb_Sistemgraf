const express = require("express");
const cors = require("cors");
const path = require('path');
require('dotenv').config();

const app = express();

app.use(cors({
    origin: process.env.FRONTEND_LINK, // Permitir solicitudes desde el frontend
    credentials: true, // Permitir el envío de cookies
}));

app.use(express.json());
app.use(require("./routes/routes"));

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

app.set("port", process.env.PORT || 5001);

app.listen(app.get("port"), async ()=>{
    console.log(`Servidor en el puerto ${app.get("port")}`)
})