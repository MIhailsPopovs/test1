"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupAlarmsStateChangeEventJoi = void 0;
const Joi = require("joi");
const GroupAlarmsStateChangeEventPayload_joi_1 = require("./GroupAlarmsStateChangeEventPayload.joi");
exports.GroupAlarmsStateChangeEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(GroupAlarmsStateChangeEventPayload_joi_1.GroupAlarmsStateChangeEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=GroupAlarmsStateChangeEvent.joi.js.map