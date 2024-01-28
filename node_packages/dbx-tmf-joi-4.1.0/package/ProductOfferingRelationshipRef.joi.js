"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingRelationshipRefJoi = void 0;
const Joi = require("joi");
const ProductOffering_joi_1 = require("./ProductOffering.joi");
const TimePeriod_joi_1 = require("./TimePeriod.joi");
exports.ProductOfferingRelationshipRefJoi = {
    description: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    name: Joi.string(),
    productOffering: Joi.object(ProductOffering_joi_1.ProductOfferingJoi).required(),
    productOffering2: Joi.object(ProductOffering_joi_1.ProductOfferingJoi).required(),
    relationshipType: Joi.string().required(),
    role: Joi.string(),
    validFor: Joi.object(TimePeriod_joi_1.TimePeriodJoi).optional(),
};
//# sourceMappingURL=ProductOfferingRelationshipRef.joi.js.map