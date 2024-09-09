"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistorialController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let HistorialController = class HistorialController {
    constructor(historialRepository) {
        this.historialRepository = historialRepository;
    }
    async create(historial) {
        return this.historialRepository.create(historial);
    }
    async count(where) {
        return this.historialRepository.count(where);
    }
    async find(filter) {
        return this.historialRepository.find(filter);
    }
    async updateAll(historial, where) {
        return this.historialRepository.updateAll(historial, where);
    }
    async findById(id, filter) {
        return this.historialRepository.findById(id, filter);
    }
    async updateById(id, historial) {
        await this.historialRepository.updateById(id, historial);
    }
    async replaceById(id, historial) {
        await this.historialRepository.replaceById(id, historial);
    }
    async deleteById(id) {
        await this.historialRepository.deleteById(id);
    }
};
exports.HistorialController = HistorialController;
tslib_1.__decorate([
    (0, rest_1.post)('/historials'),
    (0, rest_1.response)(200, {
        description: 'Historial model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Historial) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Historial, {
                    title: 'NewHistorial',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], HistorialController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/historials/count'),
    (0, rest_1.response)(200, {
        description: 'Historial model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Historial)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], HistorialController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/historials'),
    (0, rest_1.response)(200, {
        description: 'Array of Historial model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Historial, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Historial)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], HistorialController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/historials'),
    (0, rest_1.response)(200, {
        description: 'Historial PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Historial, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Historial)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Historial, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], HistorialController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/historials/{id}'),
    (0, rest_1.response)(200, {
        description: 'Historial model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Historial, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Historial, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], HistorialController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/historials/{id}'),
    (0, rest_1.response)(204, {
        description: 'Historial PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Historial, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Historial]),
    tslib_1.__metadata("design:returntype", Promise)
], HistorialController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/historials/{id}'),
    (0, rest_1.response)(204, {
        description: 'Historial PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Historial]),
    tslib_1.__metadata("design:returntype", Promise)
], HistorialController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/historials/{id}'),
    (0, rest_1.response)(204, {
        description: 'Historial DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], HistorialController.prototype, "deleteById", null);
exports.HistorialController = HistorialController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.HistorialRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.HistorialRepository])
], HistorialController);
//# sourceMappingURL=historial.controller.js.map