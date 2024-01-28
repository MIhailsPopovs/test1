"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRelationshipJoi = void 0;
const Joi = require("joi");
const ServiceRefOrValue_joi_1 = require("./ServiceRefOrValue.joi");
const Characteristic_joi_1 = require("./Characteristic.joi");
exports.ServiceRelationshipJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ServiceRelationship'),
    href: Joi.string().uri(),
    id: Joi.string(),
    relationshipType: Joi.string().required(),
    service: Joi.object(ServiceRefOrValue_joi_1.ServiceRefOrValueJoi),
    serviceRelationshipCharacteristic: Joi.array().items(Joi.object(Characteristic_joi_1.CharacteristicJoi)),
};
//# sourceMappingURL=ServiceRelationship.joi.js.map