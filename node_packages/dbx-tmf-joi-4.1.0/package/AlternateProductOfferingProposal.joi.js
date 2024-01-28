"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlternateProductOfferingProposalJoi = void 0;
const Joi = require("joi");
const ProductRefOrValue_joi_1 = require("./ProductRefOrValue.joi");
const ProductOfferingRef_joi_1 = require("./ProductOfferingRef.joi");
exports.AlternateProductOfferingProposalJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('AlternateProductOfferingProposal'),
    alternateActivationDate: Joi.date(),
    alternateProduct: Joi.object(ProductRefOrValue_joi_1.ProductRefOrValueJoi),
    alternateProductOffering: Joi.object(ProductOfferingRef_joi_1.ProductOfferingRefJoi),
    id: Joi.string(),
};
//# sourceMappingURL=AlternateProductOfferingProposal.joi.js.map