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
    // function mandarEmail({ toWhom, from, body, subject, apikey }: sendEmailOptions ): boolean{

    //     return true;
    // }

        // función para obtener información de una película por Id
        function getMovieById( id: string ) {
            console.log({ id });
        }
    
        // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
        function getMovieCast( id: string ) {
            console.log({ id });
        }
    
        // funcion para obtener el bio del actor por el id
        function getActorBioById( id: string ) {
            console.log({ id });
        }
        
        // Crear una película
        interface Movie{
            cast: string[];
            description: string;
            rating: number;
            title: string;
        }

        function createMovie({title, description, rating, cast}: Movie ) {
            console.log({ title, description, rating, cast });
        }
    
        // Crea un nuevo actor
        function createActor( fullName: string, birthdate: Date ): boolean {
            
            // tarea asincrona para verificar nombre
            // ..
            // ..
            if ( fullName === 'fernando' ) return false;
    
            console.log('Crear actor',birthdate);
            return true;        
    
        }
        //Continuacion

        //Ortras recomendaciones
        //Simplicidad es fundamental(faciles de leer)
        //Funciones de tamaño reducido
        //Funciones de una sola linea sin causar complejidad
        //Menos de 20 lineas
        //Evitar el uso del else
        //Prioriza el uso de la condicional ternaria

        const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {

            let result: number;  //define el tipo no lo dejes en any

            if ( isDead ) { //No uses tanto el else
                result = 1500;
            } else {
                if ( isSeparated ) {
                    result = 2500;
                } else {
                    if ( isRetired ) {
                        result = 3000;
                    } else {
                        result = 4000; 
                    }
                }
            }

            if( isDead ){
                return 1500;
            }
            if ( isSeparated ) {
                return 2500;
            }
            return isRetired ? 3000 : 4000; //condicional ternario 
        }

})();