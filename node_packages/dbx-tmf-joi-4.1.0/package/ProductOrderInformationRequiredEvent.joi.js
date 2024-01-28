"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOrderInformationRequiredEventJoi = void 0;
const Joi = require("joi");
const ProductOrderInformationRequiredEventPayload_joi_1 = require("./ProductOrderInformationRequiredEventPayload.joi");
exports.ProductOrderInformationRequiredEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(ProductOrderInformationRequiredEventPayload_joi_1.ProductOrderInformationRequiredEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    fieldPath: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=ProductOrderInformationRequiredEvent.joi.js.map