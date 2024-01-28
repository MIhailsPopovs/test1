"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogStateChangeEventPayloadJoi = void 0;
const Joi = require("joi");
const Catalog_joi_1 = require("./Catalog.joi");
exports.CatalogStateChangeEventPayloadJoi = {
    catalog: Joi.object(Catalog_joi_1.CatalogJoi),
};
//# sourceMappingURL=CatalogStateChangeEventPayload.joi.js.map