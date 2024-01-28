"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCategoryRefJoi = void 0;
const Joi = require("joi");
exports.ServiceCategoryRefJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string().default('ServiceCategory'),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ServiceCategoryRef'),
    href: Joi.string().uri(),
    id: Joi.string().required(),
    name: Joi.string(),
    version: Joi.number(),
};
//# sourceMappingURL=ServiceCategoryRef.joi.js.map