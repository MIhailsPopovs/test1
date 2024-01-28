"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingRelationshipJoi = void 0;
const Joi = require("joi");
const TimePeriod_joi_1 = require("./TimePeriod.joi");
exports.ProductOfferingRelationshipJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ProductOfferingRelationship'),
    href: Joi.string().uri(),
    id: Joi.string(),
    name: Joi.string(),
    relationshipType: Joi.string(),
    role: Joi.string(),
    validFor: Joi.object(TimePeriod_joi_1.TimePeriodJoi).optional(),
};
//# sourceMappingURL=ProductOfferingRelationship.joi.js.map