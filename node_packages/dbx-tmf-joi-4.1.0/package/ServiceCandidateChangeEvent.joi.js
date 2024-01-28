"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCandidateChangeEventJoi = void 0;
const Joi = require("joi");
const ServiceCandidateChangeEventPayload_joi_1 = require("./ServiceCandidateChangeEventPayload.joi");
exports.ServiceCandidateChangeEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(ServiceCandidateChangeEventPayload_joi_1.ServiceCandidateChangeEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=ServiceCandidateChangeEvent.joi.js.map