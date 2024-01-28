"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TroubleTicketInformationRequiredEventJoi = void 0;
const Joi = require("joi");
const TroubleTicketInformationRequiredEventPayload_joi_1 = require("./TroubleTicketInformationRequiredEventPayload.joi");
exports.TroubleTicketInformationRequiredEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(TroubleTicketInformationRequiredEventPayload_joi_1.TroubleTicketInformationRequiredEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    fieldPath: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=TroubleTicketInformationRequiredEvent.joi.js.map