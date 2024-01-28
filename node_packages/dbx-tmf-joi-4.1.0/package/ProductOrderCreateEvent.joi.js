"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOrderCreateEventJoi = void 0;
const Joi = require("joi");
const ProductOrderCreateEventPayload_joi_1 = require("./ProductOrderCreateEventPayload.joi");
exports.ProductOrderCreateEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(ProductOrderCreateEventPayload_joi_1.ProductOrderCreateEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=ProductOrderCreateEvent.joi.js.map