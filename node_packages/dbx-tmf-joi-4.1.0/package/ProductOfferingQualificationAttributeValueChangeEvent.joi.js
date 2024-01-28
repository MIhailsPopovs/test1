"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingQualificationAttributeValueChangeEventJoi = void 0;
const Joi = require("joi");
const ProductOfferingQualificationAttributeValueChangeEventPayload_joi_1 = require("./ProductOfferingQualificationAttributeValueChangeEventPayload.joi");
exports.ProductOfferingQualificationAttributeValueChangeEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(ProductOfferingQualificationAttributeValueChangeEventPayload_joi_1.ProductOfferingQualificationAttributeValueChangeEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    fieldPath: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=ProductOfferingQualificationAttributeValueChangeEvent.joi.js.map