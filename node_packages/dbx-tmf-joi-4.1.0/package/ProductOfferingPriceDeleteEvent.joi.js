"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingPriceDeleteEventJoi = void 0;
const Joi = require("joi");
const ProductOfferingPriceDeleteEventPayload_joi_1 = require("./ProductOfferingPriceDeleteEventPayload.joi");
exports.ProductOfferingPriceDeleteEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(ProductOfferingPriceDeleteEventPayload_joi_1.ProductOfferingPriceDeleteEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=ProductOfferingPriceDeleteEvent.joi.js.map