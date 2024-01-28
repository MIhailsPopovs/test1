"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCategoryChangeEventJoi = void 0;
const Joi = require("joi");
const ServiceCategoryChangeEventPayload_joi_1 = require("./ServiceCategoryChangeEventPayload.joi");
exports.ServiceCategoryChangeEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(ServiceCategoryChangeEventPayload_joi_1.ServiceCategoryChangeEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=ServiceCategoryChangeEvent.joi.js.map