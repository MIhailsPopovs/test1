"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogStateChangeEventJoi = void 0;
const Joi = require("joi");
const CatalogStateChangeEventPayload_joi_1 = require("./CatalogStateChangeEventPayload.joi");
exports.CatalogStateChangeEventJoi = {
    correlationId: Joi.string(),
    description: Joi.string(),
    domain: Joi.string(),
    event: Joi.object(CatalogStateChangeEventPayload_joi_1.CatalogStateChangeEventPayloadJoi),
    eventId: Joi.string(),
    eventTime: Joi.date(),
    eventType: Joi.string(),
    priority: Joi.string(),
    timeOcurred: Joi.date(),
    title: Joi.string(),
};
//# sourceMappingURL=CatalogStateChangeEvent.joi.js.map