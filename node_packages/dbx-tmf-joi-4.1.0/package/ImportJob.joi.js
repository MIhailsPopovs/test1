"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportJobJoi = void 0;
const Joi = require("joi");
exports.ImportJobJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ImportJob'),
    completionDate: Joi.date(),
    contentType: Joi.string(),
    creationDate: Joi.date(),
    errorLog: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    path: Joi.string(),
    status: Joi.string().valid('Not Started', 'Running', 'Succeeded', 'Failed'),
    url: Joi.string().uri(),
};
//# sourceMappingURL=ImportJob.joi.js.map