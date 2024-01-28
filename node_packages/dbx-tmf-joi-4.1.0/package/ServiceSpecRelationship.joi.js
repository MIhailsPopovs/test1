"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceSpecRelationshipJoi = void 0;
const Joi = require("joi");
const TimePeriod_joi_1 = require("./TimePeriod.joi");
exports.ServiceSpecRelationshipJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ServiceSpecRelationship'),
    href: Joi.string().uri(),
    id: Joi.string(),
    name: Joi.string(),
    relationshipType: Joi.string().required(),
    role: Joi.string(),
    validFor: Joi.object(TimePeriod_joi_1.TimePeriodJoi).optional(),
};
//# sourceMappingURL=ServiceSpecRelationship.joi.js.map