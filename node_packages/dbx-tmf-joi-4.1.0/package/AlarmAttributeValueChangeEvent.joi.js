"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlarmAttributeValueChangeEventJoi = void 0;
const Joi = require("joi");
const AlarmAttributeValueChangeEventPayload_joi_1 = require("./AlarmAttributeValueChangeEventPayload.joi");
exports.AlarmAttributeValueChangeEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(AlarmAttributeValueChangeEventPayload_joi_1.AlarmAttributeValueChangeEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    fieldPath: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=AlarmAttributeValueChangeEvent.joi.js.map