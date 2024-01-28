"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogCreateEventJoi = void 0;
const Joi = require("joi");
const CatalogCreateEventPayload_joi_1 = require("./CatalogCreateEventPayload.joi");
exports.CatalogCreateEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(CatalogCreateEventPayload_joi_1.CatalogCreateEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=CatalogCreateEvent.joi.js.map