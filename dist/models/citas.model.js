"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Citas = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const usuarios_model_1 = require("./usuarios.model");
const centros_model_1 = require("./centros.model");
let Citas = class Citas extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Citas = Citas;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], Citas.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Citas.prototype, "id_usuario", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Citas.prototype, "id_centro", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Citas.prototype, "fecha", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Citas.prototype, "hora", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Citas.prototype, "estado", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => usuarios_model_1.Usuarios, { keyFrom: 'id_usuario', keyTo: 'id' }),
    tslib_1.__metadata("design:type", String)
], Citas.prototype, "usuario", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => centros_model_1.Centros, { keyFrom: 'id_centro', keyTo: 'id' }),
    tslib_1.__metadata("design:type", String)
], Citas.prototype, "centro", void 0);
exports.Citas = Citas = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Citas);
//# sourceMappingURL=citas.model.js.map