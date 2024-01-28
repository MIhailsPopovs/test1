"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOrderStateChangeEventJoi = void 0;
const Joi = require("joi");
const ProductOrderStateChangeEventPayload_joi_1 = require("./ProductOrderStateChangeEventPayload.joi");
exports.ProductOrderStateChangeEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(ProductOrderStateChangeEventPayload_joi_1.ProductOrderStateChangeEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=ProductOrderStateChangeEvent.joi.js.map