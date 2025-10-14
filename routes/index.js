import express from 'express';

const router=express.Router();

router.get('/',(req,res)=>{
    res.render('inicio');
});

router.get('/nosotros',(req,res)=>{
    //const viajes='Viaje a Alemania';
    res.render('nosotros');
    /*
    res.render('nosotros',{
        textoViajes:viajes
    });
    */
});

export default router;