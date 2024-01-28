"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderInformationRequiredEventJoi = void 0;
const Joi = require("joi");
const ServiceOrderInformationRequiredEventPayload_joi_1 = require("./ServiceOrderInformationRequiredEventPayload.joi");
exports.ServiceOrderInformationRequiredEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(ServiceOrderInformationRequiredEventPayload_joi_1.ServiceOrderInformationRequiredEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    fieldPath: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=ServiceOrderInformationRequiredEvent.joi.js.map