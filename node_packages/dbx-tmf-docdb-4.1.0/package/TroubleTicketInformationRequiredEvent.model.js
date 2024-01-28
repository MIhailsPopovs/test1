"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TroubleTicketInformationRequiredEventModel = void 0;
const TroubleTicketInformationRequiredEventPayload_model_1 = require("./TroubleTicketInformationRequiredEventPayload.model");
exports.TroubleTicketInformationRequiredEventModel = {
    correlationId: String,
    description: String,
    domain: String,
    event: TroubleTicketInformationRequiredEventPayload_model_1.TroubleTicketInformationRequiredEventPayloadModel,
    eventId: String,
    eventTime: Date,
    eventType: String,
    fieldPath: String,
    priority: String,
    timeOcurred: Date,
    title: String,
};
//# sourceMappingURL=TroubleTicketInformationRequiredEvent.model.js.map