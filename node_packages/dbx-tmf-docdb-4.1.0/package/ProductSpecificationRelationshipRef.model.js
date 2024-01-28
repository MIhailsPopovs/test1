"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSpecificationRelationshipRefModel = void 0;
const ProductSpecification_model_1 = require("./ProductSpecification.model");
const TimePeriod_model_1 = require("./TimePeriod.model");
exports.ProductSpecificationRelationshipRefModel = {
    description: String,
    href: String,
    id: String,
    name: String,
    productSpecification: ProductSpecification_model_1.ProductSpecificationModel,
    productSpecification2: ProductSpecification_model_1.ProductSpecificationModel,
    relationshipType: String,
    validFor: TimePeriod_model_1.TimePeriodModel,
};
//# sourceMappingURL=ProductSpecificationRelationshipRef.model.js.map