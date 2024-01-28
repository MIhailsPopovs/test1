"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtensibleJoi = void 0;
const Joi = require("joi");
exports.ExtensibleJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('Extensible'),
};
//# sourceMappingURL=Extensible.joi.js.map