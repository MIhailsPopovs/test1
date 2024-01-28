"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelProductOrderInformationRequiredEventJoi = void 0;
const Joi = require("joi");
const CancelProductOrderInformationRequiredEventPayload_joi_1 = require("./CancelProductOrderInformationRequiredEventPayload.joi");
exports.CancelProductOrderInformationRequiredEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(CancelProductOrderInformationRequiredEventPayload_joi_1.CancelProductOrderInformationRequiredEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    fieldPath: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=CancelProductOrderInformationRequiredEvent.joi.js.map