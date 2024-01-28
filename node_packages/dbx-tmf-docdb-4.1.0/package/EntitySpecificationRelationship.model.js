"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntitySpecificationRelationshipModel = void 0;
const AssociationSpecificationRef_model_1 = require("./AssociationSpecificationRef.model");
const TimePeriod_model_1 = require("./TimePeriod.model");
exports.EntitySpecificationRelationshipModel = {
    '@baseType': String,
    '@referredType': String,
    '@schemaLocation': String,
    '@type': String,
    associationSpec: AssociationSpecificationRef_model_1.AssociationSpecificationRefModel,
    href: String,
    id: String,
    name: String,
    relationshipType: String,
    role: String,
    validFor: TimePeriod_model_1.TimePeriodModel,
};
//# sourceMappingURL=EntitySpecificationRelationship.model.js.map