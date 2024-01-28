"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingCreateEventJoi = void 0;
const Joi = require("joi");
const ProductOfferingCreateEventPayload_joi_1 = require("./ProductOfferingCreateEventPayload.joi");
exports.ProductOfferingCreateEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(ProductOfferingCreateEventPayload_joi_1.ProductOfferingCreateEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=ProductOfferingCreateEvent.joi.js.map