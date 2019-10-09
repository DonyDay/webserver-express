const express = require('express');
const app = express();

const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');
// Express HBS engine
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    //Me renderiza a la pagina web de home o la manda completamente y puedo enviar variables como objetos a la pagina web de home
    res.render('home', {
        nombre: 'Dony',
        anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    //Me renderiza a la pagina web de home o la manda completamente y puedo enviar variables como objetos a la pagina web de home
    res.render('about', {
        anio: new Date().getFullYear()
    });
});

// app.get('/', (req, res) => {

//     let salida = {
//         nombre: 'Dony',
//         Apellido: 'Cortinez',
//         url: req.url
//     };
//     res.send(salida);
//     // res.send('Hello World');
// });

app.listen(port, () => {
    console.log(`Corriendo en el puerto ${port}`);
});