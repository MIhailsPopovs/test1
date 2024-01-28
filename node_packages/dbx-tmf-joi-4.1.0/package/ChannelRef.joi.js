"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelRefJoi = void 0;
const Joi = require("joi");
exports.ChannelRefJoi = {
    '@baseType': Joi.string(),
    '@referredType': Joi.string().default('Channel'),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ChannelRef'),
    href: Joi.string().uri(),
    id: Joi.string().required(),
    name: Joi.string(),
};
//# sourceMappingURL=ChannelRef.joi.js.map