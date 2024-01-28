"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingQualificationRefJoi = void 0;
const Joi = require("joi");
exports.ProductOfferingQualificationRefJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string().default('ProductOfferingQualification'),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ProductOfferingQualificationRef'),
    href: Joi.string().uri(),
    id: Joi.string().required(),
    name: Joi.string(),
};
//# sourceMappingURL=ProductOfferingQualificationRef.joi.js.map