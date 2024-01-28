"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCategoryCreateEventJoi = void 0;
const Joi = require("joi");
const ServiceCategoryCreateEventPayload_joi_1 = require("./ServiceCategoryCreateEventPayload.joi");
exports.ServiceCategoryCreateEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(ServiceCategoryCreateEventPayload_joi_1.ServiceCategoryCreateEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=ServiceCategoryCreateEvent.joi.js.map