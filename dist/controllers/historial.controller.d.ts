import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Historial } from '../models';
import { HistorialRepository } from '../repositories';
export declare class HistorialController {
    historialRepository: HistorialRepository;
    constructor(historialRepository: HistorialRepository);
    create(historial: Omit<Historial, 'id'>): Promise<Historial>;
    count(where?: Where<Historial>): Promise<Count>;
    find(filter?: Filter<Historial>): Promise<Historial[]>;
    updateAll(historial: Historial, where?: Where<Historial>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Historial>): Promise<Historial>;
    updateById(id: string, historial: Historial): Promise<void>;
    replaceById(id: string, historial: Historial): Promise<void>;
    deleteById(id: string): Promise<void>;
}
