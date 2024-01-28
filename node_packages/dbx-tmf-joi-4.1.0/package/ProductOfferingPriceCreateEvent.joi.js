"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingPriceCreateEventJoi = void 0;
const Joi = require("joi");
const ProductOfferingPriceCreateEventPayload_joi_1 = require("./ProductOfferingPriceCreateEventPayload.joi");
exports.ProductOfferingPriceCreateEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(ProductOfferingPriceCreateEventPayload_joi_1.ProductOfferingPriceCreateEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=ProductOfferingPriceCreateEvent.joi.js.map