"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TroubleTicketCreateEventJoi = void 0;
const Joi = require("joi");
const TroubleTicketCreateEventPayload_joi_1 = require("./TroubleTicketCreateEventPayload.joi");
exports.TroubleTicketCreateEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(TroubleTicketCreateEventPayload_joi_1.TroubleTicketCreateEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=TroubleTicketCreateEvent.joi.js.map