"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingRelationshipRefModel = void 0;
const ProductOffering_model_1 = require("./ProductOffering.model");
const TimePeriod_model_1 = require("./TimePeriod.model");
exports.ProductOfferingRelationshipRefModel = {
    description: String,
    href: String,
    id: String,
    name: String,
    productOffering: ProductOffering_model_1.ProductOfferingModel,
    productOffering2: ProductOffering_model_1.ProductOfferingModel,
    relationshipType: String,
    role: String,
    validFor: TimePeriod_model_1.TimePeriodModel,
};
//# sourceMappingURL=ProductOfferingRelationshipRef.model.js.map