"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TroubleTicketResolvedEventJoi = void 0;
const Joi = require("joi");
const TroubleTicketResolvedEventPayload_joi_1 = require("./TroubleTicketResolvedEventPayload.joi");
exports.TroubleTicketResolvedEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(TroubleTicketResolvedEventPayload_joi_1.TroubleTicketResolvedEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=TroubleTicketResolvedEvent.joi.js.map