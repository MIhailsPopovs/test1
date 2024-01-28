"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingQualificationAttributeValueChangeEventPayloadJoi = void 0;
const Joi = require("joi");
const ProductOfferingQualification_joi_1 = require("./ProductOfferingQualification.joi");
exports.ProductOfferingQualificationAttributeValueChangeEventPayloadJoi = {
    productOfferingQualification: Joi.object(ProductOfferingQualification_joi_1.ProductOfferingQualificationJoi),
};
//# sourceMappingURL=ProductOfferingQualificationAttributeValueChangeEventPayload.joi.js.map