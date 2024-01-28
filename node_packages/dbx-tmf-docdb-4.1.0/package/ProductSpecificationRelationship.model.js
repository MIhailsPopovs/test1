"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSpecificationRelationshipModel = void 0;
const TimePeriod_model_1 = require("./TimePeriod.model");
exports.ProductSpecificationRelationshipModel = {
    '@baseType': String,
    '@referredType': String,
    '@schemaLocation': String,
    '@type': String,
    href: String,
    id: String,
    name: String,
    relationshipType: String,
    validFor: TimePeriod_model_1.TimePeriodModel,
};
//# sourceMappingURL=ProductSpecificationRelationship.model.js.map