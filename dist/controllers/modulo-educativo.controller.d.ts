import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { ModuloEducativo } from '../models';
import { ModuloEducativoRepository } from '../repositories';
export declare class ModuloEducativoController {
    moduloEducativoRepository: ModuloEducativoRepository;
    constructor(moduloEducativoRepository: ModuloEducativoRepository);
    create(moduloEducativo: Omit<ModuloEducativo, 'id'>): Promise<ModuloEducativo>;
    count(where?: Where<ModuloEducativo>): Promise<Count>;
    find(filter?: Filter<ModuloEducativo>): Promise<ModuloEducativo[]>;
    updateAll(moduloEducativo: ModuloEducativo, where?: Where<ModuloEducativo>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<ModuloEducativo>): Promise<ModuloEducativo>;
    updateById(id: string, moduloEducativo: ModuloEducativo): Promise<void>;
    replaceById(id: string, moduloEducativo: ModuloEducativo): Promise<void>;
    deleteById(id: string): Promise<void>;
}
