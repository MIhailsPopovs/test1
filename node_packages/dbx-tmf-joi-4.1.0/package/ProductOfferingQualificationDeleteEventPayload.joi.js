"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingQualificationDeleteEventPayloadJoi = void 0;
const Joi = require("joi");
const ProductOfferingQualification_joi_1 = require("./ProductOfferingQualification.joi");
exports.ProductOfferingQualificationDeleteEventPayloadJoi = {
    productOfferingQualification: Joi.object(ProductOfferingQualification_joi_1.ProductOfferingQualificationJoi),
};
//# sourceMappingURL=ProductOfferingQualificationDeleteEventPayload.joi.js.map