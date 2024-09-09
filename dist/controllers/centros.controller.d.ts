import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Centros } from '../models';
import { CentrosRepository } from '../repositories';
export declare class CentrosController {
    centrosRepository: CentrosRepository;
    constructor(centrosRepository: CentrosRepository);
    create(centros: Omit<Centros, 'id'>): Promise<Centros>;
    count(where?: Where<Centros>): Promise<Count>;
    find(filter?: Filter<Centros>): Promise<Centros[]>;
    updateAll(centros: Centros, where?: Where<Centros>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Centros>): Promise<Centros>;
    updateById(id: string, centros: Centros): Promise<void>;
    replaceById(id: string, centros: Centros): Promise<void>;
    deleteById(id: string): Promise<void>;
}
