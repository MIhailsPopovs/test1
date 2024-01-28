"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSpecificationRelationshipRefJoi = void 0;
const Joi = require("joi");
const ProductSpecification_joi_1 = require("./ProductSpecification.joi");
const TimePeriod_joi_1 = require("./TimePeriod.joi");
exports.ProductSpecificationRelationshipRefJoi = {
    description: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    name: Joi.string(),
    productSpecification: Joi.object(ProductSpecification_joi_1.ProductSpecificationJoi).required(),
    productSpecification2: Joi.object(ProductSpecification_joi_1.ProductSpecificationJoi).required(),
    relationshipType: Joi.string().required(),
    validFor: Joi.object(TimePeriod_joi_1.TimePeriodJoi).optional(),
};
//# sourceMappingURL=ProductSpecificationRelationshipRef.joi.js.map