"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingStateChangeEventJoi = void 0;
const Joi = require("joi");
const ProductOfferingStateChangeEventPayload_joi_1 = require("./ProductOfferingStateChangeEventPayload.joi");
exports.ProductOfferingStateChangeEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(ProductOfferingStateChangeEventPayload_joi_1.ProductOfferingStateChangeEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=ProductOfferingStateChangeEvent.joi.js.map