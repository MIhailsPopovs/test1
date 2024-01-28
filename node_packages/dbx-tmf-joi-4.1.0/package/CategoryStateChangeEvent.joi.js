"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryStateChangeEventJoi = void 0;
const Joi = require("joi");
const CategoryStateChangeEventPayload_joi_1 = require("./CategoryStateChangeEventPayload.joi");
exports.CategoryStateChangeEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(CategoryStateChangeEventPayload_joi_1.CategoryStateChangeEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=CategoryStateChangeEvent.joi.js.map