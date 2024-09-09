import { Entity } from '@loopback/repository';
export declare class ModuloEducativo extends Entity {
    id?: string;
    contenido: string;
    fecha_publicacion: string;
    categoria: string;
    constructor(data?: Partial<ModuloEducativo>);
}
export interface ModuloEducativoRelations {
}
export type ModuloEducativoWithRelations = ModuloEducativo & ModuloEducativoRelations;
