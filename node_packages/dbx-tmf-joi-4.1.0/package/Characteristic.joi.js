"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacteristicJoi = void 0;
const Joi = require("joi");
const CharacteristicRelationship_joi_1 = require("./CharacteristicRelationship.joi");
exports.CharacteristicJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('Characteristic'),
    characteristicRelationship: Joi.array().items(Joi.object(CharacteristicRelationship_joi_1.CharacteristicRelationshipJoi)),
    id: Joi.string(),
    name: Joi.string().required(),
    value: Joi.any().required(),
    valueType: Joi.string(),
};
//# sourceMappingURL=Characteristic.joi.js.map