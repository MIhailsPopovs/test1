"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSpecificationStateChangeEventJoi = void 0;
const Joi = require("joi");
const ProductSpecificationStateChangeEventPayload_joi_1 = require("./ProductSpecificationStateChangeEventPayload.joi");
exports.ProductSpecificationStateChangeEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(ProductSpecificationStateChangeEventPayload_joi_1.ProductSpecificationStateChangeEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=ProductSpecificationStateChangeEvent.joi.js.map