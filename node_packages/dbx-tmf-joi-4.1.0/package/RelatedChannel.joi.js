"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelatedChannelJoi = void 0;
const Joi = require("joi");
exports.RelatedChannelJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('RelatedChannel'),
    href: Joi.string().uri(),
    id: Joi.string().required(),
    name: Joi.string(),
    role: Joi.string(),
};
//# sourceMappingURL=RelatedChannel.joi.js.map