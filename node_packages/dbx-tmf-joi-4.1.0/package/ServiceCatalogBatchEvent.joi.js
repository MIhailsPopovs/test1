"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCatalogBatchEventJoi = void 0;
const Joi = require("joi");
const ServiceCatalogBatchEventPayload_joi_1 = require("./ServiceCatalogBatchEventPayload.joi");
exports.ServiceCatalogBatchEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(ServiceCatalogBatchEventPayload_joi_1.ServiceCatalogBatchEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=ServiceCatalogBatchEvent.joi.js.map