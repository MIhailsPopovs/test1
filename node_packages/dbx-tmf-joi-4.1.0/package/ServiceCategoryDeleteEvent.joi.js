"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCategoryDeleteEventJoi = void 0;
const Joi = require("joi");
const ServiceCategoryDeleteEventPayload_joi_1 = require("./ServiceCategoryDeleteEventPayload.joi");
exports.ServiceCategoryDeleteEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(ServiceCategoryDeleteEventPayload_joi_1.ServiceCategoryDeleteEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=ServiceCategoryDeleteEvent.joi.js.map