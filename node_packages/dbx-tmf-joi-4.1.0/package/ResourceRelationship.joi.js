"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceRelationshipJoi = void 0;
const Joi = require("joi");
const Characteristic_joi_1 = require("./Characteristic.joi");
exports.ResourceRelationshipJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ResourceRelationship'),
    href: Joi.string().uri(),
    id: Joi.string(),
    relationshipType: Joi.string(),
    resourceRelationshipCharacteristic: Joi.array().items(Joi.object(Characteristic_joi_1.CharacteristicJoi)),
};
//# sourceMappingURL=ResourceRelationship.joi.js.map