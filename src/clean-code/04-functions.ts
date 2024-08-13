(() => {
    //Sabemos que estamos desarrollando codigo limpio cuando cada funcion hace exactamente lo que su nombre indica

    function sendEmail( toWhom: string ): boolean{

        //verificar correo
        if ( !toWhom.includes('@') ) return false;

        //Construir el cuerpo o mensaje

        //Enviar correo

        //Sitodo sale bien
        return true;
    }

    function sendNewEmail(): boolean{
        //Verificar si el usuario existe

        //revisar contraseña

        //crear usuario en base de datos

        //si todo sale bien

        return true;
    }

    //Limitar los parametros a 3 parametros posicionales 

    //Sirve
    function mandarEmail({ toWhom, from, body, subject, apikey }: sendEmailOptions ): boolean{

        return true;
    }

})();