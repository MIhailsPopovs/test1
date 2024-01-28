"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingAttributeValueChangeEventJoi = void 0;
const Joi = require("joi");
const ProductOfferingAttributeValueChangeEventPayload_joi_1 = require("./ProductOfferingAttributeValueChangeEventPayload.joi");
exports.ProductOfferingAttributeValueChangeEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(ProductOfferingAttributeValueChangeEventPayload_joi_1.ProductOfferingAttributeValueChangeEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    fieldPath: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=ProductOfferingAttributeValueChangeEvent.joi.js.map