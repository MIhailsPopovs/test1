"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TroubleTicketDeleteEventJoi = void 0;
const Joi = require("joi");
const TroubleTicketDeleteEventPayload_joi_1 = require("./TroubleTicketDeleteEventPayload.joi");
exports.TroubleTicketDeleteEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(TroubleTicketDeleteEventPayload_joi_1.TroubleTicketDeleteEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=TroubleTicketDeleteEvent.joi.js.map