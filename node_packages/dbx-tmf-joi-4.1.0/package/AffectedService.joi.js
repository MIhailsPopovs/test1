"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffectedServiceJoi = void 0;
const Joi = require("joi");
exports.AffectedServiceJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('AffectedService'),
    href: Joi.string().uri(),
    id: Joi.string(),
};
//# sourceMappingURL=AffectedService.joi.js.map