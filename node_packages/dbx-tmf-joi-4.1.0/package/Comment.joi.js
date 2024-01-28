"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentJoi = void 0;
const Joi = require("joi");
exports.CommentJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('Comment'),
    comment: Joi.string(),
    systemId: Joi.string(),
    time: Joi.date(),
    userId: Joi.string(),
};
//# sourceMappingURL=Comment.joi.js.map