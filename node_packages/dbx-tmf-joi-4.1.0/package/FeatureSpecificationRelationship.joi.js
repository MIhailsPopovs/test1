"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureSpecificationRelationshipJoi = void 0;
const Joi = require("joi");
const TimePeriod_joi_1 = require("./TimePeriod.joi");
exports.FeatureSpecificationRelationshipJoi = {
    featureId: Joi.string(),
    name: Joi.string().required(),
    parentSpecificationHref: Joi.string().uri(),
    parentSpecificationId: Joi.string(),
    relationshipType: Joi.string().required(),
    validFor: Joi.object(TimePeriod_joi_1.TimePeriodJoi).optional(),
};
//# sourceMappingURL=FeatureSpecificationRelationship.joi.js.map