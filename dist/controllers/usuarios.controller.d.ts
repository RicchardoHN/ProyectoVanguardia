import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Usuarios } from '../models';
import { UsuariosRepository } from '../repositories';
export declare class UsuariosController {
    usuariosRepository: UsuariosRepository;
    constructor(usuariosRepository: UsuariosRepository);
    create(usuarios: Omit<Usuarios, 'id'>): Promise<Usuarios>;
    count(where?: Where<Usuarios>): Promise<Count>;
    find(filter?: Filter<Usuarios>): Promise<Usuarios[]>;
    updateAll(usuarios: Usuarios, where?: Where<Usuarios>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Usuarios>): Promise<Usuarios>;
    updateById(id: string, usuarios: Usuarios): Promise<void>;
    replaceById(id: string, usuarios: Usuarios): Promise<void>;
    deleteById(id: string): Promise<void>;
}
