"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AckAlarmsStateChangeEventJoi = void 0;
const Joi = require("joi");
const AckAlarmsStateChangeEventPayload_joi_1 = require("./AckAlarmsStateChangeEventPayload.joi");
exports.AckAlarmsStateChangeEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(AckAlarmsStateChangeEventPayload_joi_1.AckAlarmsStateChangeEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=AckAlarmsStateChangeEvent.joi.js.map