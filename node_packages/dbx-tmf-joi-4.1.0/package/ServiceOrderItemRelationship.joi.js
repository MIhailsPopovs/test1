"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOrderItemRelationshipJoi = void 0;
const Joi = require("joi");
const ServiceOrderItemRef_joi_1 = require("./ServiceOrderItemRef.joi");
exports.ServiceOrderItemRelationshipJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ServiceOrderItemRelationship'),
    orderItem: Joi.object(ServiceOrderItemRef_joi_1.ServiceOrderItemRefJoi),
    relationshipType: Joi.string(),
};
//# sourceMappingURL=ServiceOrderItemRelationship.joi.js.map