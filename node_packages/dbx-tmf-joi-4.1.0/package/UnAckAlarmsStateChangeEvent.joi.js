"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnAckAlarmsStateChangeEventJoi = void 0;
const Joi = require("joi");
const UnAckAlarmsStateChangeEventPayload_joi_1 = require("./UnAckAlarmsStateChangeEventPayload.joi");
exports.UnAckAlarmsStateChangeEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(UnAckAlarmsStateChangeEventPayload_joi_1.UnAckAlarmsStateChangeEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=UnAckAlarmsStateChangeEvent.joi.js.map