"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingQualificationCreateEventJoi = void 0;
const Joi = require("joi");
const ProductOfferingQualificationCreateEventPayload_joi_1 = require("./ProductOfferingQualificationCreateEventPayload.joi");
exports.ProductOfferingQualificationCreateEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(ProductOfferingQualificationCreateEventPayload_joi_1.ProductOfferingQualificationCreateEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=ProductOfferingQualificationCreateEvent.joi.js.map