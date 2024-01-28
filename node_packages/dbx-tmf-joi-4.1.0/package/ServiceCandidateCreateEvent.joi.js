"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCandidateCreateEventJoi = void 0;
const Joi = require("joi");
const ServiceCandidateCreateEventPayload_joi_1 = require("./ServiceCandidateCreateEventPayload.joi");
exports.ServiceCandidateCreateEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(ServiceCandidateCreateEventPayload_joi_1.ServiceCandidateCreateEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=ServiceCandidateCreateEvent.joi.js.map