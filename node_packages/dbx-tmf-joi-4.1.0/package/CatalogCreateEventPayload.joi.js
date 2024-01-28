"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogCreateEventPayloadJoi = void 0;
const Joi = require("joi");
const Catalog_joi_1 = require("./Catalog.joi");
exports.CatalogCreateEventPayloadJoi = {
    catalog: Joi.object(Catalog_joi_1.CatalogJoi),
};
//# sourceMappingURL=CatalogCreateEventPayload.joi.js.map