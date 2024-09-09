"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Centros = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Centros = class Centros extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Centros = Centros;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], Centros.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Centros.prototype, "nombre", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Centros.prototype, "direccion", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Centros.prototype, "telefono", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Centros.prototype, "correo", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Centros.prototype, "horario_atencion", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'object',
        required: true,
    }),
    tslib_1.__metadata("design:type", Object)
], Centros.prototype, "ubicacion", void 0);
exports.Centros = Centros = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Centros);
//# sourceMappingURL=centros.model.js.map