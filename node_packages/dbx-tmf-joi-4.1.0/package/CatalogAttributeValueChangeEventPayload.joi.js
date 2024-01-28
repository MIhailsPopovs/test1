"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogAttributeValueChangeEventPayloadJoi = void 0;
const Joi = require("joi");
const Catalog_joi_1 = require("./Catalog.joi");
exports.CatalogAttributeValueChangeEventPayloadJoi = {
    catalog: Joi.object(Catalog_joi_1.CatalogJoi),
};
//# sourceMappingURL=CatalogAttributeValueChangeEventPayload.joi.js.map