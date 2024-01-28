"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TroubleTicketAttributeValueChangeEventPayloadJoi = void 0;
const Joi = require("joi");
const TroubleTicket_joi_1 = require("./TroubleTicket.joi");
exports.TroubleTicketAttributeValueChangeEventPayloadJoi = {
    troubleTicket: Joi.object(TroubleTicket_joi_1.TroubleTicketJoi),
};
//# sourceMappingURL=TroubleTicketAttributeValueChangeEventPayload.joi.js.map