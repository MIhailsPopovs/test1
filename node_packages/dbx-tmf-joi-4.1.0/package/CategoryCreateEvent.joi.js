"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryCreateEventJoi = void 0;
const Joi = require("joi");
const CategoryCreateEventPayload_joi_1 = require("./CategoryCreateEventPayload.joi");
exports.CategoryCreateEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(CategoryCreateEventPayload_joi_1.CategoryCreateEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=CategoryCreateEvent.joi.js.map