"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelServiceOrderInformationRequiredEventJoi = void 0;
const Joi = require("joi");
const CancelServiceOrderInformationRequiredEventPayload_joi_1 = require("./CancelServiceOrderInformationRequiredEventPayload.joi");
exports.CancelServiceOrderInformationRequiredEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(CancelServiceOrderInformationRequiredEventPayload_joi_1.CancelServiceOrderInformationRequiredEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    fieldPath: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=CancelServiceOrderInformationRequiredEvent.joi.js.map