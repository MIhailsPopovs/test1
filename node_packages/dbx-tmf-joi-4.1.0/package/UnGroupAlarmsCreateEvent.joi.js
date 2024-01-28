"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnGroupAlarmsCreateEventJoi = void 0;
const Joi = require("joi");
const UnGroupAlarmsCreateEventPayload_joi_1 = require("./UnGroupAlarmsCreateEventPayload.joi");
exports.UnGroupAlarmsCreateEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(UnGroupAlarmsCreateEventPayload_joi_1.UnGroupAlarmsCreateEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=UnGroupAlarmsCreateEvent.joi.js.map