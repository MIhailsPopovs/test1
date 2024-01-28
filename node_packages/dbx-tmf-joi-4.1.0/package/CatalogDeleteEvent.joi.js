"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogDeleteEventJoi = void 0;
const Joi = require("joi");
const CatalogDeleteEventPayload_joi_1 = require("./CatalogDeleteEventPayload.joi");
exports.CatalogDeleteEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(CatalogDeleteEventPayload_joi_1.CatalogDeleteEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=CatalogDeleteEvent.joi.js.map