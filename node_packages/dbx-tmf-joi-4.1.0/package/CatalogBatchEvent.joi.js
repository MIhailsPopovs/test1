"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogBatchEventJoi = void 0;
const Joi = require("joi");
const CatalogBatchEventPayload_joi_1 = require("./CatalogBatchEventPayload.joi");
exports.CatalogBatchEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(CatalogBatchEventPayload_joi_1.CatalogBatchEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=CatalogBatchEvent.joi.js.map