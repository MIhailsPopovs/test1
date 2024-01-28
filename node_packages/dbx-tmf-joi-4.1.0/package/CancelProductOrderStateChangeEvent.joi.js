"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelProductOrderStateChangeEventJoi = void 0;
const Joi = require("joi");
const CancelProductOrderStateChangeEventPayload_joi_1 = require("./CancelProductOrderStateChangeEventPayload.joi");
exports.CancelProductOrderStateChangeEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(CancelProductOrderStateChangeEventPayload_joi_1.CancelProductOrderStateChangeEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=CancelProductOrderStateChangeEvent.joi.js.map