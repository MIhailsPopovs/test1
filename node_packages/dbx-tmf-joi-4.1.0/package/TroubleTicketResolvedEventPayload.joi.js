"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TroubleTicketResolvedEventPayloadJoi = void 0;
const Joi = require("joi");
const TroubleTicket_joi_1 = require("./TroubleTicket.joi");
exports.TroubleTicketResolvedEventPayloadJoi = {
    troubleTicket: Joi.object(TroubleTicket_joi_1.TroubleTicketJoi),
};
//# sourceMappingURL=TroubleTicketResolvedEventPayload.joi.js.map