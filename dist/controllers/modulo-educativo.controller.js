"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuloEducativoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ModuloEducativoController = class ModuloEducativoController {
    constructor(moduloEducativoRepository) {
        this.moduloEducativoRepository = moduloEducativoRepository;
    }
    async create(moduloEducativo) {
        return this.moduloEducativoRepository.create(moduloEducativo);
    }
    async count(where) {
        return this.moduloEducativoRepository.count(where);
    }
    async find(filter) {
        return this.moduloEducativoRepository.find(filter);
    }
    async updateAll(moduloEducativo, where) {
        return this.moduloEducativoRepository.updateAll(moduloEducativo, where);
    }
    async findById(id, filter) {
        return this.moduloEducativoRepository.findById(id, filter);
    }
    async updateById(id, moduloEducativo) {
        await this.moduloEducativoRepository.updateById(id, moduloEducativo);
    }
    async replaceById(id, moduloEducativo) {
        await this.moduloEducativoRepository.replaceById(id, moduloEducativo);
    }
    async deleteById(id) {
        await this.moduloEducativoRepository.deleteById(id);
    }
};
exports.ModuloEducativoController = ModuloEducativoController;
tslib_1.__decorate([
    (0, rest_1.post)('/modulo-educativos'),
    (0, rest_1.response)(200, {
        description: 'ModuloEducativo model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.ModuloEducativo) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.ModuloEducativo, {
                    title: 'NewModuloEducativo',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ModuloEducativoController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/modulo-educativos/count'),
    (0, rest_1.response)(200, {
        description: 'ModuloEducativo model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.ModuloEducativo)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ModuloEducativoController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/modulo-educativos'),
    (0, rest_1.response)(200, {
        description: 'Array of ModuloEducativo model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.ModuloEducativo, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.ModuloEducativo)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ModuloEducativoController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/modulo-educativos'),
    (0, rest_1.response)(200, {
        description: 'ModuloEducativo PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.ModuloEducativo, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.ModuloEducativo)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.ModuloEducativo, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ModuloEducativoController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/modulo-educativos/{id}'),
    (0, rest_1.response)(200, {
        description: 'ModuloEducativo model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.ModuloEducativo, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.ModuloEducativo, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ModuloEducativoController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/modulo-educativos/{id}'),
    (0, rest_1.response)(204, {
        description: 'ModuloEducativo PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.ModuloEducativo, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.ModuloEducativo]),
    tslib_1.__metadata("design:returntype", Promise)
], ModuloEducativoController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/modulo-educativos/{id}'),
    (0, rest_1.response)(204, {
        description: 'ModuloEducativo PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.ModuloEducativo]),
    tslib_1.__metadata("design:returntype", Promise)
], ModuloEducativoController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/modulo-educativos/{id}'),
    (0, rest_1.response)(204, {
        description: 'ModuloEducativo DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ModuloEducativoController.prototype, "deleteById", null);
exports.ModuloEducativoController = ModuloEducativoController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ModuloEducativoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ModuloEducativoRepository])
], ModuloEducativoController);
//# sourceMappingURL=modulo-educativo.controller.js.map