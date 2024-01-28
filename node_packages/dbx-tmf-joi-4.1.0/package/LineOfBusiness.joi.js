"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineOfBusinessJoi = void 0;
const Joi = require("joi");
exports.LineOfBusinessJoi = {
    '@type': Joi.string().default('LineOfBusiness'),
    href: Joi.string().uri(),
    id: Joi.string(),
    name: Joi.string(),
};
//# sourceMappingURL=LineOfBusiness.joi.js.map