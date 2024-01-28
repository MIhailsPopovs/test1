"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagingJoi = void 0;
const Joi = require("joi");
exports.MessagingJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string(),
    '@type': Joi.string().default('Messaging'),
    body: Joi.any(),
    description: Joi.string(),
    headers: Joi.any(),
    href: Joi.string().uri(),
    id: Joi.string().required(),
    name: Joi.string().required(),
    uid: Joi.string(),
    url: Joi.string().uri(),
};
//# sourceMappingURL=Messaging.joi.js.map