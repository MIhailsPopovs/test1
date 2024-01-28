"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TroubleTicketStatusChangeEventPayloadJoi = void 0;
const Joi = require("joi");
const TroubleTicket_joi_1 = require("./TroubleTicket.joi");
exports.TroubleTicketStatusChangeEventPayloadJoi = {
    troubleTicket: Joi.object(TroubleTicket_joi_1.TroubleTicketJoi),
};
//# sourceMappingURL=TroubleTicketStatusChangeEventPayload.joi.js.map