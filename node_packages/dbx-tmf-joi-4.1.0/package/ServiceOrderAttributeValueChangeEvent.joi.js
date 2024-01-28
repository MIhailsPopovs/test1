"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderAttributeValueChangeEventJoi = void 0;
const Joi = require("joi");
const ServiceOrderAttributeValueChangeEventPayload_joi_1 = require("./ServiceOrderAttributeValueChangeEventPayload.joi");
exports.ServiceOrderAttributeValueChangeEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(ServiceOrderAttributeValueChangeEventPayload_joi_1.ServiceOrderAttributeValueChangeEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    fieldPath: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=ServiceOrderAttributeValueChangeEvent.joi.js.map