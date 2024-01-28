"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingQualificationStateChangeEventPayloadJoi = void 0;
const Joi = require("joi");
const ProductOfferingQualification_joi_1 = require("./ProductOfferingQualification.joi");
exports.ProductOfferingQualificationStateChangeEventPayloadJoi = {
    productOfferingQualification: Joi.object(ProductOfferingQualification_joi_1.ProductOfferingQualificationJoi),
};
//# sourceMappingURL=ProductOfferingQualificationStateChangeEventPayload.joi.js.map