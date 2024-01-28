"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportJob_CreateJoi = void 0;
const Joi = require("joi");
exports.ExportJob_CreateJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ExportJob'),
    completionDate: Joi.date(),
    contentType: Joi.string(),
    creationDate: Joi.date(),
    errorLog: Joi.string(),
    path: Joi.string(),
    query: Joi.string(),
    status: Joi.string().valid('Not Started', 'Running', 'Succeeded', 'Failed'),
    url: Joi.string().uri().required(),
};
//# sourceMappingURL=ExportJob_Create.joi.js.map