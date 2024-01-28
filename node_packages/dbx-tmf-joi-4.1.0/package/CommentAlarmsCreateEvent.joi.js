"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentAlarmsCreateEventJoi = void 0;
const Joi = require("joi");
const CommentAlarmsCreateEventPayload_joi_1 = require("./CommentAlarmsCreateEventPayload.joi");
exports.CommentAlarmsCreateEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(CommentAlarmsCreateEventPayload_joi_1.CommentAlarmsCreateEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=CommentAlarmsCreateEvent.joi.js.map