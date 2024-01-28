"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureJoi = void 0;
const Joi = require("joi");
const ConstraintRef_joi_1 = require("./ConstraintRef.joi");
const Characteristic_joi_1 = require("./Characteristic.joi");
const FeatureRelationship_joi_1 = require("./FeatureRelationship.joi");
exports.FeatureJoi = {
    constraint: Joi.array().items(Joi.object(ConstraintRef_joi_1.ConstraintRefJoi)),
    featureCharacteristic: Joi.array()
        .items(Joi.object(Characteristic_joi_1.CharacteristicJoi))
        .required(),
    featureRelationship: Joi.array().items(Joi.object(FeatureRelationship_joi_1.FeatureRelationshipJoi)),
    id: Joi.string(),
    isBundle: Joi.boolean(),
    isEnabled: Joi.boolean(),
    name: Joi.string().required(),
};
//# sourceMappingURL=Feature.joi.js.map