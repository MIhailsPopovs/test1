"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingQualificationCreateEventPayloadJoi = void 0;
const Joi = require("joi");
const ProductOfferingQualification_joi_1 = require("./ProductOfferingQualification.joi");
exports.ProductOfferingQualificationCreateEventPayloadJoi = {
    productOfferingQualification: Joi.object(ProductOfferingQualification_joi_1.ProductOfferingQualificationJoi),
};
//# sourceMappingURL=ProductOfferingQualificationCreateEventPayload.joi.js.map