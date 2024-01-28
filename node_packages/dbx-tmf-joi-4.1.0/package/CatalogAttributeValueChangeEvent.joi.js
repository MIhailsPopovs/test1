"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogAttributeValueChangeEventJoi = void 0;
const Joi = require("joi");
const CatalogAttributeValueChangeEventPayload_joi_1 = require("./CatalogAttributeValueChangeEventPayload.joi");
exports.CatalogAttributeValueChangeEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(CatalogAttributeValueChangeEventPayload_joi_1.CatalogAttributeValueChangeEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    fieldPath: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=CatalogAttributeValueChangeEvent.joi.js.map