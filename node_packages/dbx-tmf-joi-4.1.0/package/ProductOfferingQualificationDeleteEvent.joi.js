"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingQualificationDeleteEventJoi = void 0;
const Joi = require("joi");
const ProductOfferingQualificationDeleteEventPayload_joi_1 = require("./ProductOfferingQualificationDeleteEventPayload.joi");
exports.ProductOfferingQualificationDeleteEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(ProductOfferingQualificationDeleteEventPayload_joi_1.ProductOfferingQualificationDeleteEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=ProductOfferingQualificationDeleteEvent.joi.js.map