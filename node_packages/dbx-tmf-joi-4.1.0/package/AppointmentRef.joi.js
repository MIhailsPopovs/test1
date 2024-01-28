"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentRefJoi = void 0;
const Joi = require("joi");
exports.AppointmentRefJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string().default('Appointment'),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('AppointmentRef'),
    description: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string().required(),
};
//# sourceMappingURL=AppointmentRef.joi.js.map