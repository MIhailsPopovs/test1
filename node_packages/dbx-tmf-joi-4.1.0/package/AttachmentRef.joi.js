"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachmentRefJoi = void 0;
const Joi = require("joi");
exports.AttachmentRefJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string().default('Attachment'),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('AttachmentRef'),
    description: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string().required(),
    name: Joi.string(),
    url: Joi.string().uri(),
};
//# sourceMappingURL=AttachmentRef.joi.js.map