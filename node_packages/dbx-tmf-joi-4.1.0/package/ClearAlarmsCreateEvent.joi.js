"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClearAlarmsCreateEventJoi = void 0;
const Joi = require("joi");
const ClearAlarmsCreateEventPayload_joi_1 = require("./ClearAlarmsCreateEventPayload.joi");
exports.ClearAlarmsCreateEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(ClearAlarmsCreateEventPayload_joi_1.ClearAlarmsCreateEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=ClearAlarmsCreateEvent.joi.js.map