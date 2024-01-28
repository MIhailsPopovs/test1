"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TroubleTicketInformationRequiredEventPayloadJoi = void 0;
const Joi = require("joi");
const TroubleTicket_joi_1 = require("./TroubleTicket.joi");
exports.TroubleTicketInformationRequiredEventPayloadJoi = {
    troubleTicket: Joi.object(TroubleTicket_joi_1.TroubleTicketJoi),
};
//# sourceMappingURL=TroubleTicketInformationRequiredEventPayload.joi.js.map