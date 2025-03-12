const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.set("port", process.env.PORT || 9001);

app.listen(app.get("port"), async ()=>{
    console.log(`Servidor en el puerto ${app.get("port")}`)
})