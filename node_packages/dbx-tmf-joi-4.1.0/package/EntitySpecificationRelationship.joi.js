"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntitySpecificationRelationshipJoi = void 0;
const Joi = require("joi");
const AssociationSpecificationRef_joi_1 = require("./AssociationSpecificationRef.joi");
const TimePeriod_joi_1 = require("./TimePeriod.joi");
exports.EntitySpecificationRelationshipJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('EntitySpecificationRelationship'),
    associationSpec: Joi.object(AssociationSpecificationRef_joi_1.AssociationSpecificationRefJoi),
    href: Joi.string().uri(),
    id: Joi.string(),
    name: Joi.string(),
    relationshipType: Joi.string().required(),
    role: Joi.string(),
    validFor: Joi.object(TimePeriod_joi_1.TimePeriodJoi).optional(),
};
//# sourceMappingURL=EntitySpecificationRelationship.joi.js.map