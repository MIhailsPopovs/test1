"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailJoi = void 0;
const Joi = require("joi");
const AttachmentRefOrValue_joi_1 = require("./AttachmentRefOrValue.joi");
const Templates_joi_1 = require("./Templates.joi");
exports.EmailJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string(),
    '@type': Joi.string().default('Email'),
    attachment: Joi.array().items(Joi.object(AttachmentRefOrValue_joi_1.AttachmentRefOrValueJoi).or('href', 'url', 'content')),
    description: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string().required(),
    name: Joi.string().required(),
    templates: Joi.object(Templates_joi_1.TemplatesJoi),
    uid: Joi.string(),
};
//# sourceMappingURL=Email.joi.js.map