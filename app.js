const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/', require('./router'));

app.listen(process.env.PORT || 3000, () =>{
    console.log('SERVER corriendo en http://localhost:5000');

});
