const v = {
    color: {
        lista: [{nombre:'blanco'},{nombre:'verde'},
        {nombre:'amarillo verdoso'},{nombre:'verde amarillento'},
        {nombre:'amarillo'},{nombre:'cian'},{nombre:'rosa'},
        {nombre:'rojo'}],
        valor: 'blanco'
    },
    contorno: {
        activado: false,//bool
        opacidad: {
            minimo: 0,
            maximo: 1,
            salto: 0.001,
            valor: 0
        },//float cambia el canal alfa de todo el parametro 0-1 0.001
        grosor: {
            minimo: 1,
            maximo: 6,
            salto: 1,
            valor: 2
        }//int medido en pixeles 1-6 1
    },
    punto: { //contorno y punto son iguales
        activado: false,//bool
        opacidad: {
            minimo: 0,
            maximo: 1,
            salto: 0.001,
            valor: 0
        },//float cambia el canal alfa de todo el parametro 0-1 0.001
        grosor: {
            minimo: 1,
            maximo: 6,
            salto: 1,
            valor: 2
        }//int medido en pixeles 1-6 1
    },
    atenuar: false,// (bool) baja la opacidad de la linea superior, mas notable en ametralladoras
    espectador: false,//(bool) si es false muestra tu mira cuando espectas a otro juegador, si es true muestra la mira de ese jugador
    interior: {
        opacidad: {
            minimo: 0,
            maximo: 1,
            salto: 0.001,
            valor: 0
        },
        longitud: {
            minimo: 0,
            maximo: 20,
            salto: 1,
            valor: 0
        },
        grosor: {
            minimo: 0,
            maximo: 10,
            salto: 1,
            valor: 0
        },
        inclinacion: {
            minimo: 0,
            maximo: 20,
            salto: 1,
            valor: 0
        },
        movimiento: false,//bool cuando el jugador se mueve, la inclinacion de la mira sube
        disparo: false//bool cuando dispara la inclinacion sube
    },
    exterior: {
        opacidad: {
            minimo: 0,
            maximo: 1,
            salto: 0.001,
            valor: 0
        },
        longitud: {
            minimo: 0,
            maximo: 10,
            salto: 1,
            valor: 0
        },
        grosor: {
            minimo: 0,
            maximo: 10,
            salto: 1,
            valor: 0
        },
        inclinacion: {
            minimo: 0,
            maximo: 40,
            salto: 1,
            valor: 0
        },
        movimiento: false,//bool cuando el jugador se mueve, la inclinacion de la mira sube
        disparo: false//bool cuando dispara la inclinacion sube
    }
}
export default {v}