"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCatalogDeleteEventJoi = void 0;
const Joi = require("joi");
const ServiceCatalogDeleteEventPayload_joi_1 = require("./ServiceCatalogDeleteEventPayload.joi");
exports.ServiceCatalogDeleteEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(ServiceCatalogDeleteEventPayload_joi_1.ServiceCatalogDeleteEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=ServiceCatalogDeleteEvent.joi.js.map