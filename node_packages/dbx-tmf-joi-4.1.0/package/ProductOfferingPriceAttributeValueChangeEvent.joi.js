"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingPriceAttributeValueChangeEventJoi = void 0;
const Joi = require("joi");
const ProductOfferingPriceAttributeValueChangeEventPayload_joi_1 = require("./ProductOfferingPriceAttributeValueChangeEventPayload.joi");
exports.ProductOfferingPriceAttributeValueChangeEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(ProductOfferingPriceAttributeValueChangeEventPayload_joi_1.ProductOfferingPriceAttributeValueChangeEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    fieldPath: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=ProductOfferingPriceAttributeValueChangeEvent.joi.js.map