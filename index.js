//const express=require('express');
import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app=express();

//conectar la base de datos
db.authenticate()
    .then(()=>console.log('Base de datos conectada...'))
    .catch(error=>console.log(error));

//definir puerto
const port=process.env.PORT || 4000;

/*
app.get('/',(req,res)=>{
    res.send('Inicio');
});
*/

//habilitar pug (templates) en nuestro proyecto
app.set('view engine','pug')

//obener el año actual y pasarlo por varibles internas de express
app.use((req,res,next)=>{
    const year=new Date();
    res.locals.nombreSitio='Agencia de Viajes';
    res.locals.actualYear=year.getFullYear();
    next();
});

//definir la carpeta public
app.use(express.static('public'));

//le decimos que use las rutas que están en la url routes/index.js
app.use('/',router);

app.listen(port,()=>{
    console.log(`El servidor está funcionando en el puerto ${port}`);
});