"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let UsuariosController = class UsuariosController {
    constructor(usuariosRepository) {
        this.usuariosRepository = usuariosRepository;
    }
    async create(usuarios) {
        return this.usuariosRepository.create(usuarios);
    }
    async count(where) {
        return this.usuariosRepository.count(where);
    }
    async find(filter) {
        return this.usuariosRepository.find(filter);
    }
    async updateAll(usuarios, where) {
        return this.usuariosRepository.updateAll(usuarios, where);
    }
    async findById(id, filter) {
        return this.usuariosRepository.findById(id, filter);
    }
    async updateById(id, usuarios) {
        await this.usuariosRepository.updateById(id, usuarios);
    }
    async replaceById(id, usuarios) {
        await this.usuariosRepository.replaceById(id, usuarios);
    }
    async deleteById(id) {
        await this.usuariosRepository.deleteById(id);
    }
};
exports.UsuariosController = UsuariosController;
tslib_1.__decorate([
    (0, rest_1.post)('/usuarios'),
    (0, rest_1.response)(200, {
        description: 'Usuarios model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Usuarios) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Usuarios, {
                    title: 'NewUsuarios',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuariosController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/usuarios/count'),
    (0, rest_1.response)(200, {
        description: 'Usuarios model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Usuarios)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuariosController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/usuarios'),
    (0, rest_1.response)(200, {
        description: 'Array of Usuarios model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Usuarios, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Usuarios)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuariosController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/usuarios'),
    (0, rest_1.response)(200, {
        description: 'Usuarios PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Usuarios, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Usuarios)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Usuarios, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuariosController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/usuarios/{id}'),
    (0, rest_1.response)(200, {
        description: 'Usuarios model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Usuarios, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Usuarios, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuariosController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/usuarios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Usuarios PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Usuarios, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Usuarios]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuariosController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/usuarios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Usuarios PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Usuarios]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuariosController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/usuarios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Usuarios DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuariosController.prototype, "deleteById", null);
exports.UsuariosController = UsuariosController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.UsuariosRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UsuariosRepository])
], UsuariosController);
//# sourceMappingURL=usuarios.controller.js.map