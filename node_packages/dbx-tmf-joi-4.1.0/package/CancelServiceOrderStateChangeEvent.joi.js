"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelServiceOrderStateChangeEventJoi = void 0;
const Joi = require("joi");
const CancelServiceOrderStateChangeEventPayload_joi_1 = require("./CancelServiceOrderStateChangeEventPayload.joi");
exports.CancelServiceOrderStateChangeEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(CancelServiceOrderStateChangeEventPayload_joi_1.CancelServiceOrderStateChangeEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=CancelServiceOrderStateChangeEvent.joi.js.map