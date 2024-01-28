"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BundledProductOfferingJoi = void 0;
const Joi = require("joi");
const BundledProductOfferingOption_joi_1 = require("./BundledProductOfferingOption.joi");
exports.BundledProductOfferingJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('BundledProductOffering'),
    bundledProductOfferingOption: Joi.object(BundledProductOfferingOption_joi_1.BundledProductOfferingOptionJoi),
    href: Joi.string().uri(),
    id: Joi.string(),
    lifecycleStatus: Joi.string(),
    name: Joi.string(),
};
//# sourceMappingURL=BundledProductOffering.joi.js.map