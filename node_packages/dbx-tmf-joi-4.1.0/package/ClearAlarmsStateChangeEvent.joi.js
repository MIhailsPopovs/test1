"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClearAlarmsStateChangeEventJoi = void 0;
const Joi = require("joi");
const ClearAlarmsStateChangeEventPayload_joi_1 = require("./ClearAlarmsStateChangeEventPayload.joi");
exports.ClearAlarmsStateChangeEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(ClearAlarmsStateChangeEventPayload_joi_1.ClearAlarmsStateChangeEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=ClearAlarmsStateChangeEvent.joi.js.map