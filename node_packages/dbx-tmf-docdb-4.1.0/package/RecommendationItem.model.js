"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecommendationItemModel = void 0;
const ProductRefOrValue_model_1 = require("./ProductRefOrValue.model");
const ProductOfferingRef_model_1 = require("./ProductOfferingRef.model");
exports.RecommendationItemModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    id: String,
    priority: Number,
    product: ProductRefOrValue_model_1.ProductRefOrValueModel,
    productOffering: ProductOfferingRef_model_1.ProductOfferingRefModel,
};
//# sourceMappingURL=RecommendationItem.model.js.map