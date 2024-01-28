"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingDeleteEventJoi = void 0;
const Joi = require("joi");
const ProductOfferingDeleteEventPayload_joi_1 = require("./ProductOfferingDeleteEventPayload.joi");
exports.ProductOfferingDeleteEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(ProductOfferingDeleteEventPayload_joi_1.ProductOfferingDeleteEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=ProductOfferingDeleteEvent.joi.js.map