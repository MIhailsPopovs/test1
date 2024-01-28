"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSpecificationDeleteEventJoi = void 0;
const Joi = require("joi");
const ProductSpecificationDeleteEventPayload_joi_1 = require("./ProductSpecificationDeleteEventPayload.joi");
exports.ProductSpecificationDeleteEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(ProductSpecificationDeleteEventPayload_joi_1.ProductSpecificationDeleteEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=ProductSpecificationDeleteEvent.joi.js.map