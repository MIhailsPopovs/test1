"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCatalogCreateEventJoi = void 0;
const Joi = require("joi");
const ServiceCatalogCreateEventPayload_joi_1 = require("./ServiceCatalogCreateEventPayload.joi");
exports.ServiceCatalogCreateEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(ServiceCatalogCreateEventPayload_joi_1.ServiceCatalogCreateEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=ServiceCatalogCreateEvent.joi.js.map