export class EvaluadorModel {
    firstName: string;
    lastName: string;
    position: string;
    type: string;

    ratio: { //alcance
        tipoAlcance: String,
        clientes: [{
            nombreCliente: String,
            ubicacionCliente: [{
                nombreUbicacion: String,
                poblacion: Number
            }]
        }]
    }
}
