"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitOfMeasureJoi = void 0;
const Joi = require("joi");
exports.UnitOfMeasureJoi = {
    '@type': Joi.string().default('UnitOfMeasure'),
    href: Joi.string().uri(),
    id: Joi.string(),
    name: Joi.string(),
    value: Joi.string(),
};
//# sourceMappingURL=UnitOfMeasure.joi.js.map