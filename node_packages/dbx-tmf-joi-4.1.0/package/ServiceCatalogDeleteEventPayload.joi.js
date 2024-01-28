"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCatalogDeleteEventPayloadJoi = void 0;
const Joi = require("joi");
const ServiceCatalog_joi_1 = require("./ServiceCatalog.joi");
exports.ServiceCatalogDeleteEventPayloadJoi = {
    serviceCatalog: Joi.object(ServiceCatalog_joi_1.ServiceCatalogJoi),
};
//# sourceMappingURL=ServiceCatalogDeleteEventPayload.joi.js.map