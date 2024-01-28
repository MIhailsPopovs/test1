"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureSpecificationJoi = void 0;
const Joi = require("joi");
const ConstraintRef_joi_1 = require("./ConstraintRef.joi");
const FeatureSpecificationCharacteristic_joi_1 = require("./FeatureSpecificationCharacteristic.joi");
const FeatureSpecificationRelationship_joi_1 = require("./FeatureSpecificationRelationship.joi");
const TimePeriod_joi_1 = require("./TimePeriod.joi");
exports.FeatureSpecificationJoi = {
    constraint: Joi.array().items(Joi.object(ConstraintRef_joi_1.ConstraintRefJoi)),
    featureSpecCharacteristic: Joi.array().items(Joi.object(FeatureSpecificationCharacteristic_joi_1.FeatureSpecificationCharacteristicJoi)),
    featureSpecRelationship: Joi.array().items(Joi.object(FeatureSpecificationRelationship_joi_1.FeatureSpecificationRelationshipJoi)),
    id: Joi.string(),
    isBundle: Joi.boolean(),
    isEnabled: Joi.boolean(),
    name: Joi.string(),
    validFor: Joi.object(TimePeriod_joi_1.TimePeriodJoi).optional(),
    version: Joi.number(),
};
//# sourceMappingURL=FeatureSpecification.joi.js.map