"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CentrosController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CentrosController = class CentrosController {
    constructor(centrosRepository) {
        this.centrosRepository = centrosRepository;
    }
    async create(centros) {
        return this.centrosRepository.create(centros);
    }
    async count(where) {
        return this.centrosRepository.count(where);
    }
    async find(filter) {
        return this.centrosRepository.find(filter);
    }
    async updateAll(centros, where) {
        return this.centrosRepository.updateAll(centros, where);
    }
    async findById(id, filter) {
        return this.centrosRepository.findById(id, filter);
    }
    async updateById(id, centros) {
        await this.centrosRepository.updateById(id, centros);
    }
    async replaceById(id, centros) {
        await this.centrosRepository.replaceById(id, centros);
    }
    async deleteById(id) {
        await this.centrosRepository.deleteById(id);
    }
};
exports.CentrosController = CentrosController;
tslib_1.__decorate([
    (0, rest_1.post)('/centros'),
    (0, rest_1.response)(200, {
        description: 'Centros model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Centros) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Centros, {
                    title: 'NewCentros',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CentrosController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/centros/count'),
    (0, rest_1.response)(200, {
        description: 'Centros model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Centros)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CentrosController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/centros'),
    (0, rest_1.response)(200, {
        description: 'Array of Centros model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Centros, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Centros)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CentrosController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/centros'),
    (0, rest_1.response)(200, {
        description: 'Centros PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Centros, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Centros)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Centros, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CentrosController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/centros/{id}'),
    (0, rest_1.response)(200, {
        description: 'Centros model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Centros, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Centros, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CentrosController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/centros/{id}'),
    (0, rest_1.response)(204, {
        description: 'Centros PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Centros, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Centros]),
    tslib_1.__metadata("design:returntype", Promise)
], CentrosController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/centros/{id}'),
    (0, rest_1.response)(204, {
        description: 'Centros PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Centros]),
    tslib_1.__metadata("design:returntype", Promise)
], CentrosController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/centros/{id}'),
    (0, rest_1.response)(204, {
        description: 'Centros DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], CentrosController.prototype, "deleteById", null);
exports.CentrosController = CentrosController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.CentrosRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.CentrosRepository])
], CentrosController);
//# sourceMappingURL=centros.controller.js.map