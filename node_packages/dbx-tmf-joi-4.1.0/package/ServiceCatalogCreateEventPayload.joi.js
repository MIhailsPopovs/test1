"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCatalogCreateEventPayloadJoi = void 0;
const Joi = require("joi");
const ServiceCatalog_joi_1 = require("./ServiceCatalog.joi");
exports.ServiceCatalogCreateEventPayloadJoi = {
    serviceCatalog: Joi.object(ServiceCatalog_joi_1.ServiceCatalogJoi),
};
//# sourceMappingURL=ServiceCatalogCreateEventPayload.joi.js.map