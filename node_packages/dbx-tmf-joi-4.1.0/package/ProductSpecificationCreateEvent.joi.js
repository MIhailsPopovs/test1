"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSpecificationCreateEventJoi = void 0;
const Joi = require("joi");
const ProductSpecificationCreateEventPayload_joi_1 = require("./ProductSpecificationCreateEventPayload.joi");
exports.ProductSpecificationCreateEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(ProductSpecificationCreateEventPayload_joi_1.ProductSpecificationCreateEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=ProductSpecificationCreateEvent.joi.js.map