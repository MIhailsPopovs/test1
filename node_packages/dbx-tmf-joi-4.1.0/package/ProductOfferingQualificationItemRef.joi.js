"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingQualificationItemRefJoi = void 0;
const Joi = require("joi");
exports.ProductOfferingQualificationItemRefJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string().default('ProductOfferingQualificationItem'),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ProductOfferingQualificationItemRef'),
    href: Joi.string().uri(),
    id: Joi.string().required(),
    name: Joi.string(),
    productOfferingQualificationHref: Joi.string(),
    productOfferingQualificationId: Joi.string().required(),
    productOfferingQualificationName: Joi.string(),
};
//# sourceMappingURL=ProductOfferingQualificationItemRef.joi.js.map