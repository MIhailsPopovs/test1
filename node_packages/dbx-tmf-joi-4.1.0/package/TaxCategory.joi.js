"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxCategoryJoi = void 0;
const Joi = require("joi");
exports.TaxCategoryJoi = {
    '@type': Joi.string().default('TaxCategory'),
    href: Joi.string().uri(),
    id: Joi.string(),
    name: Joi.string(),
};
//# sourceMappingURL=TaxCategory.joi.js.map