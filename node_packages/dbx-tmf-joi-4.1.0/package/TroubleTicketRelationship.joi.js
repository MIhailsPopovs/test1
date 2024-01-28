"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TroubleTicketRelationshipJoi = void 0;
const Joi = require("joi");
exports.TroubleTicketRelationshipJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('TroubleTicketRelationship'),
    href: Joi.string().uri(),
    id: Joi.string(),
    name: Joi.string(),
    relationshipType: Joi.string(),
};
//# sourceMappingURL=TroubleTicketRelationship.joi.js.map