"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportJob_CreateJoi = void 0;
const Joi = require("joi");
exports.ImportJob_CreateJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string().uri(),
    '@type': Joi.string().default('ImportJob'),
    completionDate: Joi.date(),
    contentType: Joi.string(),
    creationDate: Joi.date(),
    errorLog: Joi.string(),
    path: Joi.string(),
    status: Joi.string().valid('Not Started', 'Running', 'Succeeded', 'Failed'),
    url: Joi.string().uri().required(),
};
//# sourceMappingURL=ImportJob_Create.joi.js.map