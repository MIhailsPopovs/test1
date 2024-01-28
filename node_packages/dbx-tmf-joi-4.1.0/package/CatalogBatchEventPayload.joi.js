"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogBatchEventPayloadJoi = void 0;
const Joi = require("joi");
const Catalog_joi_1 = require("./Catalog.joi");
exports.CatalogBatchEventPayloadJoi = {
    catalog: Joi.object(Catalog_joi_1.CatalogJoi),
};
//# sourceMappingURL=CatalogBatchEventPayload.joi.js.map