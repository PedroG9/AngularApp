export class Alojamiento {

    ciudad: string;
    tipo_alojamiento: string;
    tipo_habitacion: string;
    entrada: Date;
    salida: Date;

    constructor(pCiudad: string, pTipo_alojamiento: string, pTipo_habitacion: string, pEntrada: Date, pSalida: Date){
        this.ciudad = pCiudad;
        this.tipo_alojamiento = pTipo_alojamiento;
        this.tipo_habitacion = pTipo_habitacion;
        this.entrada = pEntrada;
        this.salida = pSalida;
    }

}

