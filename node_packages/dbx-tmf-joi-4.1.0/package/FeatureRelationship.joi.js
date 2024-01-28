"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureRelationshipJoi = void 0;
const Joi = require("joi");
const TimePeriod_joi_1 = require("./TimePeriod.joi");
exports.FeatureRelationshipJoi = {
    id: Joi.string(),
    name: Joi.string().required(),
    relationshipType: Joi.string().required(),
    validFor: Joi.object(TimePeriod_joi_1.TimePeriodJoi).optional(),
};
//# sourceMappingURL=FeatureRelationship.joi.js.map