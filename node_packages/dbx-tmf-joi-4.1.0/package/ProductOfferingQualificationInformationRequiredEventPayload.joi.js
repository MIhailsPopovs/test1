"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingQualificationInformationRequiredEventPayloadJoi = void 0;
const Joi = require("joi");
const ProductOfferingQualification_joi_1 = require("./ProductOfferingQualification.joi");
exports.ProductOfferingQualificationInformationRequiredEventPayloadJoi = {
    productOfferingQualification: Joi.object(ProductOfferingQualification_joi_1.ProductOfferingQualificationJoi),
};
//# sourceMappingURL=ProductOfferingQualificationInformationRequiredEventPayload.joi.js.map