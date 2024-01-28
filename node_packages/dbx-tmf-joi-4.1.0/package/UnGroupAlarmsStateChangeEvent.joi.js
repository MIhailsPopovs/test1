"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnGroupAlarmsStateChangeEventJoi = void 0;
const Joi = require("joi");
const UnGroupAlarmsStateChangeEventPayload_joi_1 = require("./UnGroupAlarmsStateChangeEventPayload.joi");
exports.UnGroupAlarmsStateChangeEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(UnGroupAlarmsStateChangeEventPayload_joi_1.UnGroupAlarmsStateChangeEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=UnGroupAlarmsStateChangeEvent.joi.js.map