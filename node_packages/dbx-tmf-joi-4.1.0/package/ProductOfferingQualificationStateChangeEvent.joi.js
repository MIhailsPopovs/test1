"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingQualificationStateChangeEventJoi = void 0;
const Joi = require("joi");
const ProductOfferingQualificationStateChangeEventPayload_joi_1 = require("./ProductOfferingQualificationStateChangeEventPayload.joi");
exports.ProductOfferingQualificationStateChangeEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(ProductOfferingQualificationStateChangeEventPayload_joi_1.ProductOfferingQualificationStateChangeEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=ProductOfferingQualificationStateChangeEvent.joi.js.map