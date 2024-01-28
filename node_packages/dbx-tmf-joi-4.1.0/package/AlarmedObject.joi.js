"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlarmedObjectJoi = void 0;
const Joi = require("joi");
exports.AlarmedObjectJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('AlarmedObject'),
    href: Joi.string().uri(),
    id: Joi.string(),
};
//# sourceMappingURL=AlarmedObject.joi.js.map