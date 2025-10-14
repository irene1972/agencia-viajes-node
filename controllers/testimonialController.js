import {Testimonial} from '../models/Testimoniales.js';

const guardarTestimonial=async(req,res)=>{
    
    const {nombre,correo,mensaje}=req.body;
    const errores=[];

    if(nombre.trim()===''){
        errores.push({mensaje:'El nombre está vacío'});
        //return;
    }
    if(correo.trim()===''){
        errores.push({mensaje:'El correo está vacío'});
        //return;
    }
    if(mensaje.trim()===''){
        errores.push({mensaje:'El mensaje está vacío'});
        //return;
    }
    if(errores.length>0){
        //consultar testimoniales existentes
        const testimoniales=await Testimonial.findAll();

        //mostrar la vista con errores
        res.render('testimoniales',{
            pagina:'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    }else{
        //almacenarlo en la bd
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });
            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error);
        }
    }

}

export {
    guardarTestimonial
}