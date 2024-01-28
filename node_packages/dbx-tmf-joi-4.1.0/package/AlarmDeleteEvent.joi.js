"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlarmDeleteEventJoi = void 0;
const Joi = require("joi");
const AlarmDeleteEventPayload_joi_1 = require("./AlarmDeleteEventPayload.joi");
exports.AlarmDeleteEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(AlarmDeleteEventPayload_joi_1.AlarmDeleteEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=AlarmDeleteEvent.joi.js.map