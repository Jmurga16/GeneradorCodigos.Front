export class Codigo {
    _id?: number;
    nombre: string;
    email: string;
    codigo: string;
    estado: string;

    constructor(nombre: string, email: string, codigo: string, estado: string) {
        this.nombre = nombre
        this.email = email
        this.codigo = codigo
        this.estado = estado
    }
}