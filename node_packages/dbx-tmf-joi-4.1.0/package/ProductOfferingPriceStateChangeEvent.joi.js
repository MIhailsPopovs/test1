"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingPriceStateChangeEventJoi = void 0;
const Joi = require("joi");
const ProductOfferingPriceStateChangeEventPayload_joi_1 = require("./ProductOfferingPriceStateChangeEventPayload.joi");
exports.ProductOfferingPriceStateChangeEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(ProductOfferingPriceStateChangeEventPayload_joi_1.ProductOfferingPriceStateChangeEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=ProductOfferingPriceStateChangeEvent.joi.js.map