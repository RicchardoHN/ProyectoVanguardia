import { Entity } from '@loopback/repository';
export declare class Notificaciones extends Entity {
    id?: string;
    id_usuario: string;
    mensaje: string;
    fecha_envio: string;
    tipo: string;
    usuario: string;
    constructor(data?: Partial<Notificaciones>);
}
export interface NotificacionesRelations {
}
export type NotificacionesWithRelations = Notificaciones & NotificacionesRelations;
