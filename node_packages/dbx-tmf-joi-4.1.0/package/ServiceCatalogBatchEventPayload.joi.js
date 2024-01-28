"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCatalogBatchEventPayloadJoi = void 0;
const Joi = require("joi");
const ServiceCatalog_joi_1 = require("./ServiceCatalog.joi");
exports.ServiceCatalogBatchEventPayloadJoi = {
    serviceCatalog: Joi.object(ServiceCatalog_joi_1.ServiceCatalogJoi),
};
//# sourceMappingURL=ServiceCatalogBatchEventPayload.joi.js.map