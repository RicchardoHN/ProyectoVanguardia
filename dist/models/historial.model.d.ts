import { Entity } from '@loopback/repository';
export declare class Historial extends Entity {
    id?: string;
    id_usuario: string;
    id_centro: string;
    tipoMovimiento: string;
    tipoSangre: string;
    cantidad: number;
    fecha: string;
    descripcion: string;
    constructor(data?: Partial<Historial>);
}
export interface HistorialRelations {
}
export type HistorialWithRelations = Historial & HistorialRelations;
