"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacteristicSpecificationRelationshipJoi = void 0;
const Joi = require("joi");
const TimePeriod_joi_1 = require("./TimePeriod.joi");
exports.CharacteristicSpecificationRelationshipJoi = {
    characteristicSpecificationId: Joi.string(),
    name: Joi.string(),
    parentSpecificationHref: Joi.string().uri(),
    parentSpecificationId: Joi.string(),
    relationshipType: Joi.string(),
    validFor: Joi.object(TimePeriod_joi_1.TimePeriodJoi).optional(),
};
//# sourceMappingURL=CharacteristicSpecificationRelationship.joi.js.map