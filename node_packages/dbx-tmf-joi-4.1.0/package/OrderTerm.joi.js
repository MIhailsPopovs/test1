"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderTermJoi = void 0;
const Joi = require("joi");
const Quantity_joi_1 = require("./Quantity.joi");
exports.OrderTermJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('OrderTerm'),
    description: Joi.string(),
    duration: Joi.object(Quantity_joi_1.QuantityJoi),
    name: Joi.string(),
};
//# sourceMappingURL=OrderTerm.joi.js.map