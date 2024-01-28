"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AckAlarmsCreateEventJoi = void 0;
const Joi = require("joi");
const AckAlarmsCreateEventPayload_joi_1 = require("./AckAlarmsCreateEventPayload.joi");
exports.AckAlarmsCreateEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(AckAlarmsCreateEventPayload_joi_1.AckAlarmsCreateEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=AckAlarmsCreateEvent.joi.js.map