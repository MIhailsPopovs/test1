"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSpecificationCharacteristicRelationshipJoi = void 0;
const Joi = require("joi");
const TimePeriod_joi_1 = require("./TimePeriod.joi");
exports.ProductSpecificationCharacteristicRelationshipJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ProductSpecificationCharacteristicRelationship'),
    charSpecSeq: Joi.number(),
    href: Joi.string().uri(),
    id: Joi.string(),
    name: Joi.string(),
    relationshipType: Joi.string(),
    validFor: Joi.object(TimePeriod_joi_1.TimePeriodJoi).optional(),
};
//# sourceMappingURL=ProductSpecificationCharacteristicRelationship.joi.js.map