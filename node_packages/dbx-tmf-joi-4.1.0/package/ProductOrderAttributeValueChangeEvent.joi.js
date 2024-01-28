"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOrderAttributeValueChangeEventJoi = void 0;
const Joi = require("joi");
const ProductOrderAttributeValueChangeEventPayload_joi_1 = require("./ProductOrderAttributeValueChangeEventPayload.joi");
exports.ProductOrderAttributeValueChangeEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(ProductOrderAttributeValueChangeEventPayload_joi_1.ProductOrderAttributeValueChangeEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    fieldPath: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=ProductOrderAttributeValueChangeEvent.joi.js.map