"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplatesJoi = void 0;
const Joi = require("joi");
exports.TemplatesJoi = {
    BccAddresses: Joi.array().items(Joi.string()),
    CcAddresses: Joi.array().items(Joi.string()),
    html: Joi.string(),
    source: Joi.string(),
    subject: Joi.string(),
    text: Joi.string(),
    toAddresses: Joi.array().items(Joi.string()),
};
//# sourceMappingURL=Templates.joi.js.map