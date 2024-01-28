"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TroubleTicketAttributeValueChangeEventJoi = void 0;
const Joi = require("joi");
const TroubleTicketAttributeValueChangeEventPayload_joi_1 = require("./TroubleTicketAttributeValueChangeEventPayload.joi");
exports.TroubleTicketAttributeValueChangeEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(TroubleTicketAttributeValueChangeEventPayload_joi_1.TroubleTicketAttributeValueChangeEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    fieldPath: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=TroubleTicketAttributeValueChangeEvent.joi.js.map