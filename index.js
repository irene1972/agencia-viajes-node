//const express=require('express');
import express from 'express';
import router from './routes/index.js';

const app=express();

//definir puerto
const port=process.env.PORT || 4000;

/*
app.get('/',(req,res)=>{
    res.send('Inicio');
});
*/

//habilitar pug (templates) en nuestro proyecto
app.set('view engine','pug')

//le decimos que use las rutas que están en la url routes/index.js
app.use('/',router);

app.listen(port,()=>{
    console.log(`El servidor está funcionando en el puerto ${port}`);
});