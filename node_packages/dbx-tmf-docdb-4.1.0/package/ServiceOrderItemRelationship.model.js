"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderItemRelationshipModel = void 0;
const ServiceOrderItemRef_model_1 = require("./ServiceOrderItemRef.model");
exports.ServiceOrderItemRelationshipModel = {
    '@baseType': String,
    '@schemaLocation': String,
    '@type': String,
    orderItem: ServiceOrderItemRef_model_1.ServiceOrderItemRefModel,
    relationshipType: String,
};
//# sourceMappingURL=ServiceOrderItemRelationship.model.js.map