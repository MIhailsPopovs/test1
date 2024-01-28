"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlarmCreateEventJoi = void 0;
const Joi = require("joi");
const AlarmCreateEventPayload_joi_1 = require("./AlarmCreateEventPayload.joi");
exports.AlarmCreateEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(AlarmCreateEventPayload_joi_1.AlarmCreateEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=AlarmCreateEvent.joi.js.map