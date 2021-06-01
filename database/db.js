const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'database-1.cntbjdrvomtn.us-east-2.rds.amazonaws.com',
    user: 'diegojwagner',
    password: 'diego448',
    database: 'apimatear',
})

conexion.connect((error)=>{
    if(error){
        console.error('El error de conexion es '+error);
        return
    }
    console.log('Conectado a la base de datos MySql!')
})
module.exports = conexion;