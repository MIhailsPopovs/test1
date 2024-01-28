"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediumCharacteristicJoi = void 0;
const Joi = require("joi");
exports.MediumCharacteristicJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('MediumCharacteristic'),
    city: Joi.string(),
    contactType: Joi.string(),
    country: Joi.string(),
    emailAddress: Joi.string(),
    faxNumber: Joi.string(),
    phoneNumber: Joi.string(),
    postCode: Joi.string(),
    socialNetworkId: Joi.string(),
    stateOrProvince: Joi.string(),
    street1: Joi.string(),
    street2: Joi.string(),
};
//# sourceMappingURL=MediumCharacteristic.joi.js.map