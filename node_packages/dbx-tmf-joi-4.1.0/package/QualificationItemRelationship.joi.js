"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QualificationItemRelationshipJoi = void 0;
const Joi = require("joi");
exports.QualificationItemRelationshipJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('QualificationItemRelationship'),
    id: Joi.string(),
    relationshipType: Joi.string(),
};
//# sourceMappingURL=QualificationItemRelationship.joi.js.map