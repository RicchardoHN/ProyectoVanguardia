"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventarioController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let InventarioController = class InventarioController {
    constructor(inventarioRepository) {
        this.inventarioRepository = inventarioRepository;
    }
    async create(inventario) {
        return this.inventarioRepository.create(inventario);
    }
    async count(where) {
        return this.inventarioRepository.count(where);
    }
    async find(filter) {
        return this.inventarioRepository.find(filter);
    }
    async updateAll(inventario, where) {
        return this.inventarioRepository.updateAll(inventario, where);
    }
    async findById(id, filter) {
        return this.inventarioRepository.findById(id, filter);
    }
    async updateById(id, inventario) {
        await this.inventarioRepository.updateById(id, inventario);
    }
    async replaceById(id, inventario) {
        await this.inventarioRepository.replaceById(id, inventario);
    }
    async deleteById(id) {
        await this.inventarioRepository.deleteById(id);
    }
};
exports.InventarioController = InventarioController;
tslib_1.__decorate([
    (0, rest_1.post)('/inventarios'),
    (0, rest_1.response)(200, {
        description: 'Inventario model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Inventario) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Inventario, {
                    title: 'NewInventario',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InventarioController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/inventarios/count'),
    (0, rest_1.response)(200, {
        description: 'Inventario model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Inventario)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InventarioController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/inventarios'),
    (0, rest_1.response)(200, {
        description: 'Array of Inventario model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Inventario, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Inventario)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InventarioController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/inventarios'),
    (0, rest_1.response)(200, {
        description: 'Inventario PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Inventario, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Inventario)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Inventario, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InventarioController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/inventarios/{id}'),
    (0, rest_1.response)(200, {
        description: 'Inventario model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Inventario, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Inventario, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InventarioController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/inventarios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Inventario PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Inventario, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Inventario]),
    tslib_1.__metadata("design:returntype", Promise)
], InventarioController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/inventarios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Inventario PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Inventario]),
    tslib_1.__metadata("design:returntype", Promise)
], InventarioController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/inventarios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Inventario DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], InventarioController.prototype, "deleteById", null);
exports.InventarioController = InventarioController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.InventarioRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.InventarioRepository])
], InventarioController);
//# sourceMappingURL=inventario.controller.js.map