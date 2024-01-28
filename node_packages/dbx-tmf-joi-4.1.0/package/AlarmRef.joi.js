"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlarmRefJoi = void 0;
const Joi = require("joi");
exports.AlarmRefJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string().default('Alarm'),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('AlarmRef'),
    href: Joi.string().uri(),
    id: Joi.string().required(),
    name: Joi.string(),
};
//# sourceMappingURL=AlarmRef.joi.js.map