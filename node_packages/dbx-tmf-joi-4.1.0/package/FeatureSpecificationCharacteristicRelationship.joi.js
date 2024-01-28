"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureSpecificationCharacteristicRelationshipJoi = void 0;
const Joi = require("joi");
const TimePeriod_joi_1 = require("./TimePeriod.joi");
exports.FeatureSpecificationCharacteristicRelationshipJoi = {
    characteristicId: Joi.string(),
    featureId: Joi.string(),
    name: Joi.string(),
    relationshipType: Joi.string(),
    resourceSpecificationHref: Joi.string().uri(),
    resourceSpecificationId: Joi.string(),
    validFor: Joi.object(TimePeriod_joi_1.TimePeriodJoi).optional(),
};
//# sourceMappingURL=FeatureSpecificationCharacteristicRelationship.joi.js.map