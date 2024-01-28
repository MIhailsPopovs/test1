"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupAlarmsCreateEventJoi = void 0;
const Joi = require("joi");
const GroupAlarmsCreateEventPayload_joi_1 = require("./GroupAlarmsCreateEventPayload.joi");
exports.GroupAlarmsCreateEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(GroupAlarmsCreateEventPayload_joi_1.GroupAlarmsCreateEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=GroupAlarmsCreateEvent.joi.js.map