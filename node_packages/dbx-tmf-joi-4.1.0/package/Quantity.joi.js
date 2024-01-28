"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuantityJoi = void 0;
const Joi = require("joi");
exports.QuantityJoi = {
    amount: Joi.number().default(1),
    units: Joi.string(),
};
//# sourceMappingURL=Quantity.joi.js.map