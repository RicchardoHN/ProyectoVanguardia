import { Entity } from '@loopback/repository';
import { Citas } from './citas.model';
import { Notificaciones } from './notificaciones.model';
export declare class Usuarios extends Entity {
    id?: string;
    nombre: string;
    apellido: string;
    correo: string;
    celular: string;
    direccion: string;
    tipo_sangre: string;
    rol: string;
    fecha_registro: string;
    citas: Citas[];
    notificaciones: Notificaciones[];
    constructor(data?: Partial<Usuarios>);
}
