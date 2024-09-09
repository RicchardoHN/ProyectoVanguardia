import { Entity } from '@loopback/repository';
export declare class Centros extends Entity {
    id?: string;
    nombre: string;
    direccion: string;
    telefono: string;
    correo: string;
    horario_atencion: string;
    ubicacion: {
        lat: number;
        lng: number;
    };
    constructor(data?: Partial<Centros>);
}
export interface CentrosRelations {
}
export type CentrosWithRelations = Centros & CentrosRelations;
