"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacteristicRelationshipJoi = void 0;
const Joi = require("joi");
exports.CharacteristicRelationshipJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('CharacteristicRelationship'),
    id: Joi.string(),
    relationshipType: Joi.string(),
};
//# sourceMappingURL=CharacteristicRelationship.joi.js.map