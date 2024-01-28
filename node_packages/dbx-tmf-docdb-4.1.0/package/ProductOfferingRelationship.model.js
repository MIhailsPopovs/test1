"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOfferingRelationshipModel = void 0;
const TimePeriod_model_1 = require("./TimePeriod.model");
exports.ProductOfferingRelationshipModel = {
    '@baseType': String,
    '@referredType': String,
    '@schemaLocation': String,
    '@type': String,
    href: String,
    id: String,
    name: String,
    relationshipType: String,
    role: String,
    validFor: TimePeriod_model_1.TimePeriodModel,
};
//# sourceMappingURL=ProductOfferingRelationship.model.js.map