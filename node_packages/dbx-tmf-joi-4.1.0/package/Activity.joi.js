"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityJoi = void 0;
const Joi = require("joi");
exports.ActivityJoi = {
    '@baseType': Joi.string(),
    '@schemaLocation': Joi.string(),
    '@type': Joi.string().default('Activity'),
    activityType: Joi.string()
        .valid('created', 'modified', 'approved', 'published', 'archived', 'deleted')
        .required(),
    date: Joi.date().required(),
    remarks: Joi.string(),
    user: Joi.string().required(),
};
//# sourceMappingURL=Activity.joi.js.map