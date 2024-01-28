"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemRelationshipJoi = void 0;
const Joi = require("joi");
exports.OrderItemRelationshipJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('OrderItemRelationship'),
    id: Joi.string(),
    relationshipType: Joi.string(),
};
//# sourceMappingURL=OrderItemRelationship.joi.js.map