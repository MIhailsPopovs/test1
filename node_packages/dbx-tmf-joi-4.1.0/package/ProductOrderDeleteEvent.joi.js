"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOrderDeleteEventJoi = void 0;
const Joi = require("joi");
const ProductOrderDeleteEventPayload_joi_1 = require("./ProductOrderDeleteEventPayload.joi");
exports.ProductOrderDeleteEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(ProductOrderDeleteEventPayload_joi_1.ProductOrderDeleteEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=ProductOrderDeleteEvent.joi.js.map