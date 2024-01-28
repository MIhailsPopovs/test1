"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelProductOrderCreateEventJoi = void 0;
const Joi = require("joi");
const CancelProductOrderCreateEventPayload_joi_1 = require("./CancelProductOrderCreateEventPayload.joi");
exports.CancelProductOrderCreateEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(CancelProductOrderCreateEventPayload_joi_1.CancelProductOrderCreateEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=CancelProductOrderCreateEvent.joi.js.map