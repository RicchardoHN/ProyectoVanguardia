import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Inventario } from '../models';
import { InventarioRepository } from '../repositories';
export declare class InventarioController {
    inventarioRepository: InventarioRepository;
    constructor(inventarioRepository: InventarioRepository);
    create(inventario: Omit<Inventario, 'id'>): Promise<Inventario>;
    count(where?: Where<Inventario>): Promise<Count>;
    find(filter?: Filter<Inventario>): Promise<Inventario[]>;
    updateAll(inventario: Inventario, where?: Where<Inventario>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Inventario>): Promise<Inventario>;
    updateById(id: string, inventario: Inventario): Promise<void>;
    replaceById(id: string, inventario: Inventario): Promise<void>;
    deleteById(id: string): Promise<void>;
}
