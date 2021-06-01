const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/', require('./router'));

app.listen(process.env.PORT || 8080, () =>{
    console.log('SERVER corriendo en http://localhost:8080');

});
