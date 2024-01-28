"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCatalogChangeEventJoi = void 0;
const Joi = require("joi");
const ServiceCatalogChangeEventPayload_joi_1 = require("./ServiceCatalogChangeEventPayload.joi");
exports.ServiceCatalogChangeEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(ServiceCatalogChangeEventPayload_joi_1.ServiceCatalogChangeEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=ServiceCatalogChangeEvent.joi.js.map