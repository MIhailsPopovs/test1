"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TroubleTicketCreateEventPayloadJoi = void 0;
const Joi = require("joi");
const TroubleTicket_joi_1 = require("./TroubleTicket.joi");
exports.TroubleTicketCreateEventPayloadJoi = {
    troubleTicket: Joi.object(TroubleTicket_joi_1.TroubleTicketJoi),
};
//# sourceMappingURL=TroubleTicketCreateEventPayload.joi.js.map