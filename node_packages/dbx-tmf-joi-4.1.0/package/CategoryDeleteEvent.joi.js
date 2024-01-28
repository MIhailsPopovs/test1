"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryDeleteEventJoi = void 0;
const Joi = require("joi");
const CategoryDeleteEventPayload_joi_1 = require("./CategoryDeleteEventPayload.joi");
exports.CategoryDeleteEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(CategoryDeleteEventPayload_joi_1.CategoryDeleteEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=CategoryDeleteEvent.joi.js.map