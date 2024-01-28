"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCatalogChangeEventPayloadJoi = void 0;
const Joi = require("joi");
const ServiceCatalog_joi_1 = require("./ServiceCatalog.joi");
exports.ServiceCatalogChangeEventPayloadJoi = {
    serviceCatalog: Joi.object(ServiceCatalog_joi_1.ServiceCatalogJoi),
};
//# sourceMappingURL=ServiceCatalogChangeEventPayload.joi.js.map