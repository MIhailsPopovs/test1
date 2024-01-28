"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderMilestoneEventJoi = void 0;
const Joi = require("joi");
const ServiceOrderMilestoneEventPayload_joi_1 = require("./ServiceOrderMilestoneEventPayload.joi");
exports.ServiceOrderMilestoneEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(ServiceOrderMilestoneEventPayload_joi_1.ServiceOrderMilestoneEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=ServiceOrderMilestoneEvent.joi.js.map