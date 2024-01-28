"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentAlarmsStateChangeEventJoi = void 0;
const Joi = require("joi");
const CommentAlarmsStateChangeEventPayload_joi_1 = require("./CommentAlarmsStateChangeEventPayload.joi");
exports.CommentAlarmsStateChangeEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(CommentAlarmsStateChangeEventPayload_joi_1.CommentAlarmsStateChangeEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=CommentAlarmsStateChangeEvent.joi.js.map