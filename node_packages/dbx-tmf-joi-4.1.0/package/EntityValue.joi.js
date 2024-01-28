"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityValueJoi = void 0;
const Joi = require("joi");
exports.EntityValueJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('EntityValue'),
    href: Joi.string().uri(),
    id: Joi.string(),
};
//# sourceMappingURL=EntityValue.joi.js.map