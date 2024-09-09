import { Entity } from '@loopback/repository';
export declare class Citas extends Entity {
    id?: string;
    id_usuario: string;
    id_centro: string;
    fecha: string;
    hora: string;
    estado: string;
    usuario: string;
    centro: string;
    constructor(data?: Partial<Citas>);
}
export interface CitasRelations {
}
export type CitasWithRelations = Citas & CitasRelations;
