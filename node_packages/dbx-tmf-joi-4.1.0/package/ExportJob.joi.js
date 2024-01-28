"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportJobJoi = void 0;
const Joi = require("joi");
exports.ExportJobJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ExportJob'),
    completionDate: Joi.date(),
    contentType: Joi.string(),
    creationDate: Joi.date(),
    errorLog: Joi.string(),
    href: Joi.string().uri(),
    id: Joi.string(),
    path: Joi.string(),
    query: Joi.string(),
    status: Joi.string().valid('Not Started', 'Running', 'Succeeded', 'Failed'),
    url: Joi.string().uri(),
};
//# sourceMappingURL=ExportJob.joi.js.map