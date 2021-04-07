const express = require('express')
const app = express()
const exphbs = require('express-handlebars');
const { handlebars } = require('hbs');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
 
// EXPRESS HBS ENGINE
// hbs.registerPartials(__dirname + '/views/parciales');


app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

app.get('/', (req, res) => {
  
res.render('home', {
    nombre: 'Hector Barreto!',
    anio: new Date().getFullYear()
});

});

app.get('/about', (req, res) => {
  
    res.render('about', {
        anio: new Date().getFullYear()
    });    
    
    });
    
app.listen(port, () => {
    console.log(`Escuchando nuevas peticiones en el puerto ${port}`);
});