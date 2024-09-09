"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuloEducativo = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let ModuloEducativo = class ModuloEducativo extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.ModuloEducativo = ModuloEducativo;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], ModuloEducativo.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], ModuloEducativo.prototype, "contenido", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], ModuloEducativo.prototype, "fecha_publicacion", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], ModuloEducativo.prototype, "categoria", void 0);
exports.ModuloEducativo = ModuloEducativo = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], ModuloEducativo);
//# sourceMappingURL=modulo-educativo.model.js.map