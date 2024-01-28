"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnAckAlarmsCreateEventJoi = void 0;
const Joi = require("joi");
const UnAckAlarmsCreateEventPayload_joi_1 = require("./UnAckAlarmsCreateEventPayload.joi");
exports.UnAckAlarmsCreateEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(UnAckAlarmsCreateEventPayload_joi_1.UnAckAlarmsCreateEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=UnAckAlarmsCreateEvent.joi.js.map