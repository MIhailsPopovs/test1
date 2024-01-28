"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelServiceOrderCreateEventJoi = void 0;
const Joi = require("joi");
const CancelServiceOrderCreateEventPayload_joi_1 = require("./CancelServiceOrderCreateEventPayload.joi");
exports.CancelServiceOrderCreateEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(CancelServiceOrderCreateEventPayload_joi_1.CancelServiceOrderCreateEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=CancelServiceOrderCreateEvent.joi.js.map