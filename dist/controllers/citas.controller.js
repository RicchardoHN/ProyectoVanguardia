"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitasController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CitasController = class CitasController {
    constructor(citasRepository) {
        this.citasRepository = citasRepository;
    }
    async create(citas) {
        return this.citasRepository.create(citas);
    }
    async count(where) {
        return this.citasRepository.count(where);
    }
    async find(filter) {
        return this.citasRepository.find(filter);
    }
    async updateAll(citas, where) {
        return this.citasRepository.updateAll(citas, where);
    }
    async findById(id, filter) {
        return this.citasRepository.findById(id, filter);
    }
    async updateById(id, citas) {
        await this.citasRepository.updateById(id, citas);
    }
    async replaceById(id, citas) {
        await this.citasRepository.replaceById(id, citas);
    }
    async deleteById(id) {
        await this.citasRepository.deleteById(id);
    }
};
exports.CitasController = CitasController;
tslib_1.__decorate([
    (0, rest_1.post)('/citas'),
    (0, rest_1.response)(200, {
        description: 'Citas model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Citas) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Citas, {
                    title: 'NewCitas',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CitasController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/citas/count'),
    (0, rest_1.response)(200, {
        description: 'Citas model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Citas)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CitasController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/citas'),
    (0, rest_1.response)(200, {
        description: 'Array of Citas model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Citas, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Citas)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CitasController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/citas'),
    (0, rest_1.response)(200, {
        description: 'Citas PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Citas, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Citas)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Citas, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CitasController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/citas/{id}'),
    (0, rest_1.response)(200, {
        description: 'Citas model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Citas, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Citas, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CitasController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/citas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Citas PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Citas, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Citas]),
    tslib_1.__metadata("design:returntype", Promise)
], CitasController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/citas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Citas PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Citas]),
    tslib_1.__metadata("design:returntype", Promise)
], CitasController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/citas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Citas DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], CitasController.prototype, "deleteById", null);
exports.CitasController = CitasController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.CitasRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.CitasRepository])
], CitasController);
//# sourceMappingURL=citas.controller.js.map