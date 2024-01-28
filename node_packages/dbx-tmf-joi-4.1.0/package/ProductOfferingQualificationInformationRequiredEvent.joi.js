"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingQualificationInformationRequiredEventJoi = void 0;
const Joi = require("joi");
const ProductOfferingQualificationInformationRequiredEventPayload_joi_1 = require("./ProductOfferingQualificationInformationRequiredEventPayload.joi");
exports.ProductOfferingQualificationInformationRequiredEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(ProductOfferingQualificationInformationRequiredEventPayload_joi_1.ProductOfferingQualificationInformationRequiredEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    fieldPath: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=ProductOfferingQualificationInformationRequiredEvent.joi.js.map