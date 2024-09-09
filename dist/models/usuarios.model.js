"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuarios = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const citas_model_1 = require("./citas.model");
const notificaciones_model_1 = require("./notificaciones.model");
let Usuarios = class Usuarios extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Usuarios = Usuarios;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], Usuarios.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Usuarios.prototype, "nombre", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Usuarios.prototype, "apellido", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Usuarios.prototype, "correo", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Usuarios.prototype, "celular", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Usuarios.prototype, "direccion", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Usuarios.prototype, "tipo_sangre", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Usuarios.prototype, "rol", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Usuarios.prototype, "fecha_registro", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => citas_model_1.Citas, { keyTo: 'id_usuario' }),
    tslib_1.__metadata("design:type", Array)
], Usuarios.prototype, "citas", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => notificaciones_model_1.Notificaciones, { keyTo: 'id_usuario' }),
    tslib_1.__metadata("design:type", Array)
], Usuarios.prototype, "notificaciones", void 0);
exports.Usuarios = Usuarios = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Usuarios);
//# sourceMappingURL=usuarios.model.js.map