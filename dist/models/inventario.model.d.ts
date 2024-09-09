import { Entity } from '@loopback/repository';
export declare class Inventario extends Entity {
    id?: string;
    id_centro: string;
    tipoSangre: string;
    cantidad: number;
    fechaUltimaActualizacion: string;
    constructor(data?: Partial<Inventario>);
}
export interface InventarioRelations {
}
export type InventarioWithRelations = Inventario & InventarioRelations;
