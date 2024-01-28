"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogDeleteEventPayloadJoi = void 0;
const Joi = require("joi");
const Catalog_joi_1 = require("./Catalog.joi");
exports.CatalogDeleteEventPayloadJoi = {
    catalog: Joi.object(Catalog_joi_1.CatalogJoi),
};
//# sourceMappingURL=CatalogDeleteEventPayload.joi.js.map