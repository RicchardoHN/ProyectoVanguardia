import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Citas } from '../models';
import { CitasRepository } from '../repositories';
export declare class CitasController {
    citasRepository: CitasRepository;
    constructor(citasRepository: CitasRepository);
    create(citas: Omit<Citas, 'id'>): Promise<Citas>;
    count(where?: Where<Citas>): Promise<Count>;
    find(filter?: Filter<Citas>): Promise<Citas[]>;
    updateAll(citas: Citas, where?: Where<Citas>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Citas>): Promise<Citas>;
    updateById(id: string, citas: Citas): Promise<void>;
    replaceById(id: string, citas: Citas): Promise<void>;
    deleteById(id: string): Promise<void>;
}
