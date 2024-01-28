"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSpecificationAttributeValueChangeEventJoi = void 0;
const Joi = require("joi");
const ProductSpecificationAttributeValueChangeEventPayload_joi_1 = require("./ProductSpecificationAttributeValueChangeEventPayload.joi");
exports.ProductSpecificationAttributeValueChangeEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(ProductSpecificationAttributeValueChangeEventPayload_joi_1.ProductSpecificationAttributeValueChangeEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    fieldPath: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=ProductSpecificationAttributeValueChangeEvent.joi.js.map