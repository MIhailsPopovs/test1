"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCandidateDeleteEventJoi = void 0;
const Joi = require("joi");
const ServiceCandidateDeleteEventPayload_joi_1 = require("./ServiceCandidateDeleteEventPayload.joi");
exports.ServiceCandidateDeleteEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(ServiceCandidateDeleteEventPayload_joi_1.ServiceCandidateDeleteEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=ServiceCandidateDeleteEvent.joi.js.map