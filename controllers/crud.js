//Invocamos a la conexion de la DB
const conexion = require('../database/db');
//GUARDAR un REGISTRO
exports.save = (req, res)=>{
    const cat = req.body.cat;
    const name = req.body.name;
    const img = req.body.img;
    const price = req.body.price;
    const cantidad = req.body.cantidad;
    const descripcion = req.body.descripcion;
    const longDesc = req.body.longDesc;

    conexion.query('INSERT INTO apimatear SET ?',{cat:cat, name:name,img:img,price:price,cantidad:cantidad,descripcion:descripcion,longDesc:longDesc}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            //console.log(results);   
            res.redirect('/');         
        }
});
};
// ACTUALIZAR un REGISTRO
exports.update = (req, res)=>{
    const id = req.body.id;
    const cat = req.body.cat;
    const name = req.body.name;
    const img = req.body.img;
    const price = req.body.price;
    const cantidad = req.body.cantidad;
    const descripcion = req.body.descripcion;
    const longDesc = req.body.longDesc;
    conexion.query('UPDATE apimatear SET ? WHERE id = ?',[{cat:cat, name:name,img:img,price:price,cantidad:cantidad,descripcion:descripcion,longDesc:longDesc}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
});
};