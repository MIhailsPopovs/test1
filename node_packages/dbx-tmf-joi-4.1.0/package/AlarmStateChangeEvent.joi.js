"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlarmStateChangeEventJoi = void 0;
const Joi = require("joi");
const AlarmStateChangeEventPayload_joi_1 = require("./AlarmStateChangeEventPayload.joi");
exports.AlarmStateChangeEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(AlarmStateChangeEventPayload_joi_1.AlarmStateChangeEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=AlarmStateChangeEvent.joi.js.map